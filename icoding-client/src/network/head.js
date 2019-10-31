import {axios} from 'utils/axiosConfig'

import queryString from "querystring";

import params from "common/params";

export function loginGit(way) {
  let requestURL = way == "github" ? params.github.userAuthorizationURL : params.gitee.userAuthorizationURL;
  const param = way == "github" ? queryString.stringify({
    client_id: params.github.clientId,
    redirect_uri: params.github.redirectUri,
    scope: params.github.scope,
    state: params.github.state
  }) : queryString.stringify({
    client_id: params.gitee.clientId,
    redirect_uri: params.gitee.redirectUri,
    response_type: params.gitee.responseType,
    // scope: params.gitee.scope,
    state: params.gitee.state
  })
  requestURL += ("?" + param);
  window.location.href = requestURL;
}

export function getGitToken(code) {
  return axios({
    url: params.gitee.accessTokenUri,
    method: 'post',
    headers: {"Accept": "application/json"},
    data: {
      grant_type: params.gitee.grantType,
      code: code,
      client_id: params.gitee.clientId,
      redirect_uri: params.gitee.redirectUri,
      client_secret: params.gitee.clientSecret
    }
  })
}

export function reqGitUser(code) {
  return axios({
    url: '/login/'+code+'/'+params.gitee.state,
    method: 'get',
    // params: {
    //   code: code,
    //   state: params.gitee.state
    // }
  })
}

export function pullUserInfoByToken(token) {
  return axios({
    url: '/userInfo',
    method: 'get',
    params: {
      token: token
    }
  })
}


