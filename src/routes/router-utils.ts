/**
 * Extract single bell page router parameters
 * For fragment pages, we use location rather than props.computedMatch.
 * React fragment doesn't get params from route match in router.
 * @param location: the url location
 */

import { RouterUrlProps } from "models/interface"
import { matchPath } from "react-router-dom"

const getRouteParams = (pathname: string): RouterUrlProps => {
  const matchMenu = matchPath(pathname, {
    path: "/:menu",
  })
  const menu = matchMenu?.params["menu"] || 'text-similarity'
  return {
    menu: menu
  }
}

const buildRouterUrl = (params: RouterUrlProps): string => {
  return `/${params.menu}`
}

export { getRouteParams, buildRouterUrl }
