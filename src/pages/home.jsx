import React from 'react'
import Layout from '../layout'
import Projects from '../Components/Home/Projects'
import AutoCounter from '../Components/Home/AutoCounter'
import Clients from '../Components/Home/Clients'
import Certifications from '../Components/Home/Certifications'
import Partners from '../Components/Home/Partners'


const Home = () => {
  return (
  <div>
    <Layout>
      <Projects/>
    </Layout>
    <AutoCounter/>
    <Partners/>
    <Clients/>
    <Certifications/>


  </div>
  )
}
export default Home;