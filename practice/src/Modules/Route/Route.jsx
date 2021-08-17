import React from 'react';
import {
	BrowserRouter as Router,
		Switch,
		Route,
		Link,
		useParams
} from "react-router-dom";

export default function ParamsExample(){
	return(
			<Router>
				<div>
					<h2>Accounts</h2>

					<ul>
						<li>
							<Link to={'/netflix'} >NetFlix</Link>
							<Link to={'/zillow-group'} >Zillow Group</Link>

						</li>
					</ul>
				</div>
			</Router>
	)
}