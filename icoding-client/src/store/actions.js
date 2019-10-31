import params from "common/params";
import {axios} from "utils/axiosConfig";
import {uuid} from 'utils/uuid'

export default {
  async getUserInfoByToken({commit},payload){
    async function getUserInfo() {
      return new Promise( (resolve ,reject) => {
        axios({
          url: params.gitee.userInfoUri,
          method: 'get',
          params: {
            access_token: payload.accessToken
          }
        }).then ( res =>{
          console.log(res.data)
          let data = res.data;
          const user = {
            accountId : data.id,
            name: data.name,
            avatarUrl: data.avatar_url,
            introduction: data.bio,
            token: uuid()
          }
          resolve(user)
        })

      })
    }

    commit('setUserInfo', await getUserInfo())
    }

}
