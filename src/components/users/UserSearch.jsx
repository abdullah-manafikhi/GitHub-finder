import {useState ,useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'
import GithubContext from '../context/github/GithubContext'
import {searchUsers} from '../context/github/GithubAction'


function UserSearch() {
  const [input, setInput] = useState("")
  const {users , clearUsers , dispatch} = useContext(GithubContext)
  const {setAlert , alert , test} = useContext(AlertContext)

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if(input === ""){
      setAlert("please enter something ... !" , "SET_ALERT")
    }
    else{
      dispatch({type:'SET_LOADING'})
      const users = await searchUsers(input)
      dispatch({type:"GET_USERS" , payload: users})
    }
  }



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-4 gap-8'>
      <div className='mx-auto'>
        <div className="form-control">
        <h2 className='text-red-500 mb-2'>{alert}</h2>  
          <div className="relative">
            <form>
              <input type="text"  onChange={handleChange} value={input} placeholder="Search" className="input input-lg bg-white  pr-40 text-black w-full" />
              <button className="btn btn-lg absolute top-0 right-0 w-36 rounded-l-none tracking-widest" onClick={handleSubmit} >go</button>
            </form>
          </div>
        </div>
      </div> 
      {users.length !== 0 &&
      <div className="btn btn-ghost btn-lg mx-auto" onClick={() => {dispatch({type:'CLEAR_USERS'})}}>clear</div>
}
    </div>
  )
}

export default UserSearch
