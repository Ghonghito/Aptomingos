import React from 'react'
import maintain from 'assets/images/maintaining.png'
import developpement from 'assets/images/developpement.png'
import daotreasury from 'assets/images/daotreasury.png'
import mingotank from 'assets/images/mingotank.png'
import phase2 from 'assets/images/phase2.png'
import conclusion from 'assets/images/conclusion.png'
import Layout from 'components/Layout'
import Item from './Item'

const index = () => {
  return (
    <div id='financialComponent'>
      <Layout>
        <div className='flex justify-center mb-12 md:py-32'>
          <p className='text-6xl font-bold text-black'>Financials</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-24'>
          <Item
            image={maintain}
            description='Aptomingos is our baby, and we definitely want to take care of it after mint, which is why we are dedicating a small percentage to maintaining it. We did intend everything the Aptomingo community provides to be free, but we still believe with just a small amount of dedicated funds we could make the entire experience a whole lot better.'
          />
          <Item
            image={developpement}
            description="The best way to understand this, it to consider development to be a sort of flexible tab. We'd like to improve on a lot of stuff. Flippy would like an actual drawing tablet to be able to make better graphics. We'd like to expand the alpha team. We want to do all sorts of things to improve the community and our project, so we wanted to dedicate a small portion to these minor development goals."
          />
          <Item
            image={daotreasury}
            description="The DAO treasury is an obvious fun one, simply because it's funds that our core community will have voting rights on to spend. We want the DAO treasury funds to be gamified. We have some good ideas already to incentivize people to make contributions and find proper use for the funds, that will in return reward the people who came up the ideas, but you will know more about this closer to mint."
          />
          <Item
            image={mingotank}
            description="Mingo tank is another fun one with endless possibilities. Mingo Tank will happen on a bi-weekly/monthly basis, and if an idea is received well within our community, the community is able to spend however much they like from the Mingo Tank fund tab. But that's not all. If an idea is received so well that the community wants to go above and beyond to support it, they are also welcome to dig into the DAO treasury funds. Every individual mingo on the show is also very welcome to spend their own personal funds to fuel the idea being presented."
          />
          <Item
            image={phase2}
            description="Phase 2 is where we get to have a lot of fun and creative freedom. Our brains are already firing on all cylinders when it comes to the future of B.FLY, and in dedicating a decent chunk of the funds for that goal, we believe can build something truly extraordinary. If you look at Aptomingos, everything we have and everything we've built has been with a budget of ZERO. Now, just imagine for a second if we had proper funding. We believe we could truly create something magical and fun, and that's exactly what we intend to do."
          />
          <Item
            image={conclusion}
            description="This is the initial financial distribution. We call it 'financials 1.0'. You might be thinking 'hold on, the team doesn't get anything?'. You would be correct, we don't. The goal of the initial fund distribution is not to take any money away from the project and distribute it to the team, the goal is to refuel the project so that we can continue working on it and making it better. Once we are more properly established, we will add on two more tabs to the equation. One for the teams survival, and one for marketing. We've said this before, but we would like to reiterate for anyone curious. As an initial statement, and to show our dedication to the project, the team plans on taking no more than enough to have a roof over our heads and food in our mouths."
          />
        </div>
      </Layout>
    </div>
  )
}

export default index