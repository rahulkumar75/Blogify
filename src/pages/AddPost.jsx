import React from 'react'
// import {Container} from '../components/container/Container'
// import { PostForm } from '../components/post-form/PostForm'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
