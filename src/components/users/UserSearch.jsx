import {useState ,useContext , useReducer} from 'react'
import AlertContext from '../context/alert/AlertContext'
import GithubContext from '../context/github/GithubContext'


function UserSearch() {
  const [input, setInput] = useState("")
  const {users ,searchUsers , clearUsers} = useContext(GithubContext)
  const {setAlert , alert , test} = useContext(AlertContext)

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if(input === ""){
      setAlert("please enter something ... !" , "SET_ALERT")
    }
    else{
      searchUsers(input)
    }
  }

  const clear = () => {
    clearUsers()
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
      <div className="btn btn-ghost btn-lg mx-auto" onClick={clear}>clear</div>
}
    </div>
  )
}

export default UserSearch
