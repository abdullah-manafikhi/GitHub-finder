import {PropTypes} from 'prop-types'
import {Link} from 'react-router-dom'

function UserItem({user:{login , avatar_url}}) {
  return (
    <div className='card border border-0.25 shadow-inner compact side'>
        <div className="card-body flex-initial flex-row justify-center space-x-6">
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img src={avatar_url} alt="prfile_picture" />
                </div>
            </div>
            <div className='mt-2 w-32'>
                <h2 className="card-title">{login}</h2>
                <Link className='text-slate-400' to={`/user/${login}`}>Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes={
    user: PropTypes.object.isRequired
}

export default UserItem     
