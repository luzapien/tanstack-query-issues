import { githubApi } from '../../api/github.api'

export const getIssues = async () => {
    const { data } = await githubApi.get('/issues')

    return data
}
