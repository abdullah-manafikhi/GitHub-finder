import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function ReposList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100 mb-8'>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-titl">
          Latest Repositories
        </h2>
        {repos.map((repo) =>(

           <RepoItem key={repo.id} repo= {repo} />
        ))}
      </div>
    </div>
  )
}

ReposList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default ReposList
