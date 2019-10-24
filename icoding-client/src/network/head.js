import {axios} from 'utils/axiosConfig'

import queryString from "querystring";

import params from "common/params";

export function loginGit() {
  let requestURL = params.userAuthorizationUri;
  requestURL = requestURL + ('?' + queryString.stringify({
    client_id: params.clientId,
    redirect_uri: params.redirect_uri,
    scope: params.scope,
    state: params.state
  }))
  window.console.log(requestURL)
  window.location.href = requestURL;
}
