import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'


function NewPost(props) {

    const [content, setContent] = useState('');
    const history = useHistory();

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (content !== '' && content !== 'Введите текст') {
            fetchData(event.target.content.value);
            setContent('');
        } else {
            setContent('Введите текст');
        }
    }

    const fetchData = (content) => {

        const data = {
            id: 0,
            content
        }

        try {
            fetch('http://localhost:7777/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            history.push('/')
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <div className="NewPost" onSubmit={handleSubmit}>
            <form action="#">
                <textarea name="content" id="" cols="30" rows="10" onChange={handleChange} value={content}></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

NewPost.propTypes = {

}

export default NewPost

