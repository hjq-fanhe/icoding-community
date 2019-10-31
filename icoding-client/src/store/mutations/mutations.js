
export default {
  setUserInfo(state,payload){
    state.user = payload
  },
  updateLoginStatus(state,payload){
    state.loginStatus = payload.status
  },
  updateShow(state,payload){
    state.isShow = payload.show;
  }
}
