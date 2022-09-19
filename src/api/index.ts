import request from '../utils/http'
import { LoginDate } from '../types'
import { Methods } from './methods'
export function user_login(data: any): Promise<LoginDate | any> {
    return request({
        url: '/api/xf-auth/oauth/token',
        method: Methods.POST,
        params: {
            tenantId: '000000',
            grant_type: 'password',
            scope: 'all',
            type: 'account',
            ...data
        }
    })
}
