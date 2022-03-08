import '../App.css'
import React from 'react';

function PostItem(props) {
    return (
        <div className='post'>
            <div className='post-content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.msg}
                </div>
            </div>
            <div className='post-btns'>
                <button onClick={() => props.remove(props.post)}>удалить</button>
            </div>
        </div>
    )
}

export default PostItem;