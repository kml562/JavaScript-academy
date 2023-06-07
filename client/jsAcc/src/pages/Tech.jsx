import React from 'react'
import { useParams } from 'react-router'
import LogNavbar from '../component/LogNavbar'
import { Footer } from '../component'

const Tech = () => {
    const {id} = useParams()


  return (
    <div>
      <LogNavbar />
        <div className="tech_main">
            {id}
        </div>
      <Footer />
    </div>
  )
}

export default Tech