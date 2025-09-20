import { request } from "@/utils";

export function getChannelAPI() {
    return request({
        url: '/channels',
        method: 'GET',
    })
}

export function createArticleAPI(data) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}

export function getArticleListAPI(params) {
    return request({
        url: '/mp/articles',
        method: 'GET',
        params
    })
}

export function delArticleAPI(id) {
    return request({
        url: `/mp/articles/${id}`,
        method: 'DELETE'
    })
}

export function getArticleByIdAPI(id) {
    return request({
        url: `/mp/articles/${id}`,
        method: 'GET'
    })
}