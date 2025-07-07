import api from '@/services/api'
import type { HackerNewsItem } from './types'
import { AxiosRequestConfig } from 'axios'

export const getTopStories = async (
    options?: AxiosRequestConfig
): Promise<number[]> => {
    const { data } = await api.get<number[]>('/v0/topstories.json', {
        ...options,
    })

    return data
}

export const getItem = async (
    itemId: string,
    options?: AxiosRequestConfig
): Promise<HackerNewsItem> => {
    const { data } = await api.get<HackerNewsItem>(`/v0/item/${itemId}.json`, {
        ...options,
    })

    return data
}
