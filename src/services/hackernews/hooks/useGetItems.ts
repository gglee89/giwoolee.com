import { useQueries, useQuery } from '@tanstack/react-query'
import { HackerNewsQueryKeys } from '../queryKeys'
import { getItem } from 'services/hackernews'
import { HackerNewsItem } from '../types'

interface QueryResult {
    data: HackerNewsItem[]
    isLoading: boolean
    isError: boolean
}

const useGetItems = (itemIds: string[]) => {
    return useQueries({
        queries: itemIds.map((itemId) => ({
            queryKey: HackerNewsQueryKeys.GetItem(itemId!),
            queryFn: () => getItem(itemId!),
            enabled: !!itemId,
        })),
        combine: (results) => {
            return {
                data: results.flatMap((result) => result.data || []),
                isLoading: results.some((result) => result.isLoading),
                isError: results.some((result) => result.isError),
            }
        },
    })
}

export default useGetItems
