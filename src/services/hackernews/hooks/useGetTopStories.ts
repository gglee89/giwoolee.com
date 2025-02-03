import { useQuery } from '@tanstack/react-query'
import { HackerNewsQueryKeys } from '../queryKeys'
import { getTopStories } from 'services/hackernews'

const useGetTopStories = () => {
    return useQuery({
        queryKey: HackerNewsQueryKeys.GetTopStories(),
        queryFn: ({ signal }) => getTopStories(signal),
    })
}

export default useGetTopStories
