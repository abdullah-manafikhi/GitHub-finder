import {useEffect , useContext} from 'react'
import { Link } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import ReposList from '../repos/ReposList'
import {useParams} from 'react-router-dom'
import {FaArrowLeft , FaUsers , FaCodepen , FaStore} from 'react-icons/fa'
import {getUser, getRepos} from '../context/github/GithubAction'

 

function User() {

  const {user , loading ,repos , dispatch} = useContext(GithubContext)
  const params = useParams()
 
  useEffect(() => {

    dispatch({type:'SET_LOADING'})

    const getUserData = async () => {
      const userData = await getUser(params.login)
      dispatch({type:'GET_USER' , payload: userData})

      const userRepoData = await getRepos(params.login)
      dispatch({type:'GET_REPOS' , payload: userRepoData})
    }

    getUserData()
  },[])

  if(loading){
    return(
      <div className="mx-auto my-auto font-bold">
        Loading....
      </div>
    )
  }

 

  return (  
    <>
      <div className=" mt-12 mx-auto w-10/12">
        <div className="mb-4">
          <Link className='btn btn-ghost' to='/'><FaArrowLeft className='mx-2'/>Back To Search</Link>
        </div>
        <div className="card grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 md:gap-8 mb-8 w-full">
          <div className="custom-card-img mb-6 md:mb-0"> 
            <div className='card-img-full rounded-3xl'>
              <figure>
                <img className='rounded-xl opacity-40' src={user.avatar_url} alt="proile picture" />
              </figure>
              <div className="card-body justify-end relative bottom-24 hidden sm:block opacity-80 ">
                <h2 className='car-title mb-0 text-xl'>{user.name}</h2>
                <p className='text-sm'>{user.login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {user.name}
                <div className="ml-2 mr-1 badge badge-success">
                  {user.type}
                </div>
                {user.hireable && (
                  <div className="mx-1 badge badge-info">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{user.bio}</p>
              <div className="mt-4 card-actions">
                <a 
                  href={user.html_url}
                  target='_blank'
                  rel='noreffer'
                  className='btn btn-outline'
                  >Visit Profile</a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {user.location && (
                <div className='stat'>
                  <div className="stat-title text-md">
                    Location 
                  </div>
                  <div className="text-lg stat-val">{user.location}</div>
                </div>
              )}
              {user.blog && (
                <div className='stat'>
                  <div className="stat-title text-md">
                    Website 
                  </div>
                  <a className="text-lg stat-val" href={`https://${user.blog}`} target='_blank' >{user.blog}</a>
                </div>
              )}
              {user.twitter_username && (
                <div className='stat'>
                  <div className="stat-title text-md">
                    Twitter 
                  </div>
                  <a className="text-lg stat-val" href={`https://${user.twitter_username}`} target='_blank' >{user.twitter_username}</a>
                </div>
              )}
            </div>
            <div className="stats  w-full mt-4 rounded-lg shadow-lg py-5 bg-base-100">
              <div className="stat">
                <div className="stat-figure">
                  <FaUsers className='text-3xl  fill-pink-600' />
                </div>
                <div className="stat-title">
                  Followers
                </div>
                <div className="stat-value text-3xl">{user.followers}</div>
              </div>
              <div className="stat">
                <div className="stat-figure">
                  <FaUsers className='text-3xl md:text-5xl fill-pink-600' />
                </div>
                <div className="stat-title">
                  Following
                </div>
                <div className="stat-value text-3xl">{user.following}</div>
              </div>
              <div className="stat">
                <div className="stat-figure">
                  <FaCodepen className='text-3xl md:text-5xl fill-pink-600' />
                </div>
                <div className="stat-title">
                  Public repos
                </div>
                <div className="stat-value text-3xl">{user.public_repos}</div>
              </div>
              <div className="stat">
                <div className="stat-figure">
                  <FaStore className='text-3xl md:text-5xl fill-pink-600' />
                </div>
                <div className="stat-title">
                  Public Gists
                </div>
                <div className="stat-value text-3xl">{user.public_gists}</div>
              </div>
            </div>
          </div>
        </div>
        <ReposList repos={repos}/>
      </div>
    </>
  )
}

export default User
