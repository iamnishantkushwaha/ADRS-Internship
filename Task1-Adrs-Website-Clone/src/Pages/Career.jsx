import React from 'react'
import JoinOurTeam from '../Components/JoinOurTeam'
import Whyworkwithus from '../Components/Whyworkwithus'
import Currentopening from '../Components/Currentopening'
import ApplicationProcess from '../Components/ApplicationProcess'
import DontSeeperfectfit from '../Components/DontSeeaperfectfit'
const Career = () => {
  return (
    <div className='bg-primaryBackdround min-h-screen w-full'>
       <JoinOurTeam/>
       <Whyworkwithus/>
       <Currentopening/>
       <ApplicationProcess/>
       <DontSeeperfectfit/>
    </div>
  )
}

export default Career