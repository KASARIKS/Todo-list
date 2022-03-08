import React from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

let tid = 1

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({ title: '', msg: '' })

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            id: tid,
            ...post
        }
        setPost({ title: '', msg: '' })
        tid++
        create(newPost)
    }

    return (
        <form className='app-form'>
            <div className='app-form-div'>
                <div>
                    <MyInput type={'text'} placeholder={'title'} value={post.title} onChange={el => setPost({ ...post, title: el.target.value })}></MyInput>
                    <MyInput type={'text'} placeholder={'text'} value={post.msg} onChange={el => setPost({ ...post, msg: el.target.value })}></MyInput>

                </div>
                <MyButton style={{ color: 'black' }} onClick={addNewPost}>Append</MyButton>
            </div>
        </form>
    )
}

export default PostForm