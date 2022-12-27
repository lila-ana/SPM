import React from 'react'
import Layout from '../layout'
import Projects from '../Components/Home/Projects'
import AutoCounter from '../Components/Home/AutoCounter'

const Home = () => {
  return (
  <div>
    <Layout>
      <Projects/>
    </Layout>
    <AutoCounter/>
  </div>
  )
}
export default Home;