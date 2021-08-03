import React from 'react'
import ACard from './ACard'
import ECard from './Ecard'
import LCard from './LCard'
import HeaderArea from './HeaderArea'
import PersonalInformation from './PICard'

const Content = () => {
    return (
        <>
        <HeaderArea />
        <div className='cards'>
        <div className='fw-bolder w-90 mx-auto display-6'>Profile</div>
        <PersonalInformation />
        <ACard />
        <ECard />
        <LCard />
        </div>
        </>
    )
}

export default Content
