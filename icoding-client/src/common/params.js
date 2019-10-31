//存放github,gitee 请求参数
const params={
  github:{
    userAuthorizationURL: "https://github.com/login/oauth/authorize",
    clientId: "6072d0342dcda0e39a6a",
    clientSecret: "6d0737403f143ee35da6a91b41cd69c8f5aa55b7",
    redirectUri: "http://localhost:8487/login",
    scope: 'user',
    code: '',
    state: 'github',
    accessTokenUri : "/login/oauth/access_token",
    userInfoUri:"/user"

  },
  gitee: {
    userAuthorizationURL: "https://gitee.com/oauth/authorize",
    clientId: "fd9a2b9f244b68d1eae2c23dd3d5c49a2c94aa45255533f3f1ba3ecaa6ef0f44",
    redirectUri: "http://localhost:8487/loginPage/login",
    responseType: "code",
    scope: "user_info",
    grantType: 'authorization_code',
    code: '',
    clientSecret: "34668816f7a078d679dbe23f095ff4223e89e222ace66d3546296e5dbe1584ee",
    accessTokenUri:"/oauth/token",
    userInfoUri: "/api/v5/user",
    state: 'gitee'
  }
}

export default params;
