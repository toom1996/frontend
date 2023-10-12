import { post } from '@/utils/request'

export function webAuthLogin (params:object) {return post('/v1/web/auth/login', params)}