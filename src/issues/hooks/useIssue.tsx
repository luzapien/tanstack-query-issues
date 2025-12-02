import { useQuery } from '@tanstack/react-query'
import { getIssue, getComments } from '../actions'

export const useIssue = (issueNumber: number) => {
    const issueQuery = useQuery({
        queryKey: ['issues', issueNumber],
        queryFn: () => getIssue(issueNumber),
        staleTime: 1000 * 60,
    })

    // const commentsQuery = useQuery({
    //     queryKey: ['issues', issueNumber, 'comments'],
    //     queryFn: () => getComments(issueNumber),
    //     staleTime: 1000 * 60,
    // })

    const commentsQuery = useQuery({
        queryKey: ['issues', issueQuery.data?.number, 'comments'],
        queryFn: () => getComments(issueQuery.data!.number,),
        staleTime: 1000 * 60,
        enabled: issueQuery !== undefined,
    })

    return { issueQuery, commentsQuery }
}
