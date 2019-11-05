import React from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'

function Posts(props) {

    const [posts, isLoading, error] = useFetchData(process.env.REACT_APP_POSTS_URL);

    const handleClick = (event) => {
        const history = useHistory(); // Ругается  Line 11:25:  React Hook "useHistory" is called in function "handleClick" which is neither a React function component or a custom React Hook function  react-hooks/rules-of-hooks
        history.push("/posts/" + event.target.id)
    }

    return (
        <>
            {!error && <Link to="/posts/new">Создать пост</Link>}
            {isLoading && <p>Загрузка ...</p>}
            {error && <p>Ошибка: {error.message}</p>}
            {!error && posts.map(o =>
                <div key={o.id} id={o.id} onClick={handleClick}>
                    {o.content}
                </div>
            )}
        </>
    )
}

Posts.propTypes = {

}

export default Posts

