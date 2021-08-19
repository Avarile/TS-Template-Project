import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom"

const NestingExample = () => {
  return (
    <>
      <Router>
        <div>
          {/* the Links */}
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/family">FAMILY MEMBERS</Link>
            </li>
          </ul>
          {/* the Switches */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/family">
              <FamilyMembers />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

const HomePage = () => {
  return (
    <>
      <h2>Our Family</h2>
    </>
  )
}

const FamilyMembers = () => {
  let { path, url } = useRouteMatch()

  return (
    <>
      <h2>Family Members are listed here: </h2>

      <ul>
        <li>
          <Link to={`${url}/Avarile`}>Avarile</Link>
        </li>

        <li>
          <Link to={`${url}/Emily`}>Emily</Link>
        </li>

        <li>
          <Link to={`${url}/Anastasia`}>Anastasia</Link>
        </li>

        <li>
          <Link to={`${url}/Aurelia`}>Aurelia</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a family member to inspect the details</h3>
        </Route>

        <Route path={`${path}/familymemberId`}>
          <FamilyMember />
        </Route>
      </Switch>
    </>
  )
}

const FamilyMember = () => {
  let { familymemberId } = useParams()
  return (
    <>
      <p>this is {familymemberId}</p>
      <p>let's welcome {familymemberId}</p>
    </>
  )
}
