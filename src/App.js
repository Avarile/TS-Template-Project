import { useGlobalStates } from "./DataStore/GlobalStates/GlobeStore"

function App() {
  const globalStoreInject = useGlobalStates()
  const injector = globalStoreInject("globalState")

  return <></>
}

export default App
