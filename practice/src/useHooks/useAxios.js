import { useState, useEffect  } from "react";
import axios from "axios";

axios.defaults.baseURL = 'https://jsonlaceholder.typicode.com';

export const useAxios = ({url, method, body= null, headers= null}) => {
  const [response, setResponse ] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading ] = useState(true);

//receive { url, method, body = null, headers = null } as props, init 3 State, response as the data we expect to receive, error will bounce back if sth wrong happened during the process, loading, will is loading, just a state to let you know is loading or not. 

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
//if Data is got , response = res.data, now we can return response, main goal is achieved.

      .catch((err) => {
        setError(err);
      })
//if the Data is unreachable for any reason, return the error, set Error = err from the server.

      .finally(() => {
        setLoading(false);
      })
//after Data is got(compeletely) from the server, we can now set the loading to false.
  }

//fetchData is the main logics for this hook to get the data

  useEffect(() => {
    fetchData();
  },[method, url, body, headers]);
//if anything changes, reload!!! mother fucker!!


  return { response , error, loading};
//pick the fruit.

}

// export default useAxios;



import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/


//Another working version
// export const useAxios = (axiosParams) => {
//     const [response, setResponse] = useState(undefined);
//     const [error, setError] = useState('');
//     const [loading, setloading] = useState(true);

//     const fetchData = async (params) => {
//       try {
//        const result = await axios.request(params);
//        setResponse(result.data);
//        } catch( error ) {
//          setError(error);
//        } finally {
//          setLoading(false);
//        }
//     };

//     useEffect(() => {
//         fetchData(axiosParams);
//     }, []); // execute once only

//     return { response, error, loading };
// };
