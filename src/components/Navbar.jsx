import {FaGithub} from 'react-icons/fa'
import { PropTypes } from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar({title}) {
  return (
    <nav className='navbar flex bg-neutral text-neutral-content'>
      <FaGithub className='text-3xl mx-2 '/>
      <Link to='/' className=' font-bold text-xl'>{title}</Link>

      <div className="flex flex-1 justify-end">
          <Link to='/' className='btn btn-ghost mx-2'>Home</Link>
          <Link to='/about' className='btn btn-ghost mx-2'>About</Link>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title : 'Github finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}


export default Navbar
