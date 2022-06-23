import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

function NotFound() {
  return (
    <div className='grid align-middle text-center'>
        <h2 className="text-6xl font-bold">Oops !</h2>
        <p className='text-4xl font-bold mt-6'>404-Page is not found!</p>
        <Link  to='/' className='btn btn-primary btn-lg mt-6 mx-auto'> <FaHome className='mx-2'></FaHome> Back To Home</Link>
    </div>
  )
}

export default NotFound
