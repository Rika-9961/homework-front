import request from '@/utils/request'

export function recommend(body) {
    return request.post('/recommend', body)
}