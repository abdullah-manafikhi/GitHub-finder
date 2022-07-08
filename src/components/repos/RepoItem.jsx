import PropTypes from 'prop-types'
import {FaEye , FaLink, FaInfo , FaStar , FaUtensils} from 'react-icons/fa'

function RepoItem({repo}) {
  return (
    <div className='mb-2 py-4 px-4 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={repo.html_url}>
                    <FaLink className='mr-2'/> {repo.name}
                </a>
            </h3>
            <p className="mb-3">{repo.description}</p>
        </div>
        <div>
            <div className="mr-2 badge bade-lg badge-info">
                <FaEye className='mr-2' /> {repo.watchers}
            </div>
            <div className="mr-2 badge bade-lg badge-success">
                <FaStar className='mr-2' /> {repo.stargazers}
            </div>
            <div className="mr-2 badge bade-lg badge-error">
                <FaInfo className='mr-2' /> {repo.open_issues}
            </div>
            <div className="mr-2 badge bade-lg badge-warning">
                <FaUtensils className='mr-2' /> {repo.watchers_count}
            </div>
        </div>
    </div>
  )
}

RepoItem.propTypes={
    repo:PropTypes.object.isRequired
}

export default RepoItem
