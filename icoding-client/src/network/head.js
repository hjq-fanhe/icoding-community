import {axios} from './axiosConfig'

export function loginGit(){
    return axios({
        url: '/login/oauth/authorize',
        method: 'get',
        params: {
            client_id: '6072d0342dcda0e39a6a',
            redirect_uri: 'http://localhost:8082/icoding/callback',
            scope: 'user',
            state: 'github'
        }
    })
}