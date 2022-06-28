import {useState ,useContext} from 'react'
import GithubContext from '../context/GithubContext'


function UserSearch() {
  const [input, setInput] = useState("")
  const {users ,searchUsers , clearUsers} = useContext(GithubContext)

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if(input === ""){
      alert("please enter something . . . !")
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
          <div className="relative">
            <form>
              <input type="text"  onChange={handleChange} value={input} placeholder="Search" class="input input-lg bg-white  pr-40 text-black w-full" />
              <button class="btn btn-lg absolute top-0 right-0 w-36 rounded-l-none tracking-widest" onClick={handleSubmit} >go</button>
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
