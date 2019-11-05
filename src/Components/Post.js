import React from 'react'
import PropTypes from 'prop-types'
import useFetchData from '../hooks/useFetchData'

function Post({ id }) {

    const [posts, isLoading, error] = useFetchData(process.env.REACT_APP_POSTS_URL);

    const post = posts.find(o => o.id === id);

    return (
        <div>
            <p>{post.content}</p>
            <button>Изменить</button>
            <button>Удалить</button>
        </div>

    )
}

Post.propTypes = {

}

export default Post

