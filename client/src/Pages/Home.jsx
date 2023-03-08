import React from 'react'
import FormCard from '../components/FormCard'
import Posts from '../components/Posts/Posts'

const Home = ({currentId,setCurrentId}) => {
  return (
    <>
    <div className="wrapper">
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
            <FormCard currentId={currentId} setCurrentId={setCurrentId} />
    </div>
    </>
  )
}

export default Home