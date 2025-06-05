import request from '@/utils/request'

export function start(threshold) {
    return request.get('/data/start?threshold' + threshold)
}

export function getById(id) {
    return request.get('/data/getById?id=' + id)
}

export function getAll() {
    return request.get('/data')
}