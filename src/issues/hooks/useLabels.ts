import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions'
import { GithubLabel } from '../interfaces'

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60, // 1 stale hour

        // placeholderData: [
        //     {
        //         id: 69105383,
        //         node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
        //         url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
        //         name: 'Browser: IE',
        //         color: 'c7def8',
        //         default: false,
        //     },

        //     {
        //         id: 8625278332,
        //         node_id: 'LA_kwDOAJy2Ks8AAAACAhtNfA',
        //         url: 'https://api.github.com/repos/facebook/react/labels/Compiler:%20Ref%20Validation',
        //         name: 'Compiler: Ref Validation',
        //         color: '5319e7',
        //         default: false,
        //     },
        // ] satisfies GithubLabel[],

        // initialData: [
        //     {
        //         id: 69105383,
        //         node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
        //         url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
        //         name: 'Browser: IE',
        //         color: 'c7def8',
        //         default: false,
        //     },

        //     {
        //         id: 8625278332,
        //         node_id: 'LA_kwDOAJy2Ks8AAAACAhtNfA',
        //         url: 'https://api.github.com/repos/facebook/react/labels/Compiler:%20Ref%20Validation',
        //         name: 'Compiler: Ref Validation',
        //         color: '5319e7',
        //         default: false,
        //     },
        // ] satisfies GithubLabel[],
    })

    return { labelsQuery }
}
