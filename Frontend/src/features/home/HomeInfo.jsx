import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import "./HomeInfo.scss"

function HomeInfo() {
  return (
    <div className='homeInfo'>
        <HomeInfoCard
            iconClass="fa-solid fa-comments fa-3x"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <HomeInfoCard
            iconClass="fa-solid fa-money-bills fa-3x"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
        />
        <HomeInfoCard
            iconClass="fa-solid fa-shield fa-3x"
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
        />
        
    </div>
  )
}

export default HomeInfo