const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

// get search results

export  const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
    const {items} = await response.json()
   
    return items
}

  // get user account

 export const getUser = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`)
    const data = await response.json()
    return data
}

// get user repos

export const getRepos = async (login) => {
    const params = new URLSearchParams({
        sort:'created',
        per_page: 10

    }) 
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)
    const data = await response.json()
    return data
}


