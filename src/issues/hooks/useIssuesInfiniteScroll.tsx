import { useInfiniteQuery } from '@tanstack/react-query'
import { State } from '../interfaces'
import { getIssues } from '../actions'

interface useIssuesProps {
    state: State
    selectedLabels: string[]
}

export const useIssuesInfiniteScroll = ({ state, selectedLabels }: useIssuesProps) => {
    const issuesQuery = useInfiniteQuery({
        queryKey: ['issues', 'infinite', { state, selectedLabels }],
        queryFn: ({ pageParam, queryKey }) => {
            const [, , args] = queryKey
            const { state, selectedLabels } = args as useIssuesProps
            return getIssues(state, selectedLabels, pageParam)
        },
        staleTime: 1000 * 60,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => (lastPage.length > 0 ? pages.length + 1 : undefined),
    })

    return { issuesQuery }
}
