import React from 'react'
import FoundersStatement from '../Components/AboutUs/FoundersStatement'
import SolutionDescription from '../Components/AboutUs/SolutionDescription'
import SolutionJourney from '../Components/AboutUs/SolutionJourney'
import Layout from '../layout'

export default function Aboutus() {
  return (
    <Layout>
      <FoundersStatement/>
      <SolutionJourney/>
      <SolutionDescription/>
   </Layout>
    )
}
