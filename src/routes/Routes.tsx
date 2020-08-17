import * as React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { NotFound } from "./NotFound"
import { Demo } from "../components/Demo"

const routes = [
  {
    path: "/text-similarity",
    component: Demo,
  },
  {
    path: "/text-summarization",
    component: Demo,
  },
  {
    path: "/semantic-search",
    component: Demo,
  },
  {
    path: "/sentiment-analysis",
    component: Demo,
  },
  {
    path: "/",
    component: Redirect,
    to: "/text-similarity"
  },
  {
    path: "*",
    component: NotFound,
  },
]

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          const Component = route.component
          return (
            <Route exact key={index} path={route.path} {...props}>
              <Component {...props} to={route.to} />
            </Route>
          )
        })}
      </Switch>
    </BrowserRouter >
  )
}

export default Routes
