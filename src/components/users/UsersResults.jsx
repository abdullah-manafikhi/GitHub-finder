import {useEffect , useContext} from 'react'
import GithubContext from '../context/github/GithubContext'
import UserItem from './UserItem'

function UsersResults() {

    const {users , loading} = useContext(GithubContext)

    useEffect(() => {

    }, [])

    console.log(users)
   
    if(!loading){
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center my-12'>
        {users.map((user) => {
            return  <h3 key={user.id} className=''><UserItem key={user.id} user={user} /></h3>
        })}
        </div>
    )
    }
    else{
        return(<h3 className='mx-auto mt-0 text-2xl font-bold'>Loading...</h3>)
    }

}

export default UsersResults
