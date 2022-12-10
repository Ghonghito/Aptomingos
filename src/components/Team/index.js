import React from 'react'
import Layout from 'components/Layout'
import fischer from 'assets/images/fischer.png'
import flippy from 'assets/images/flippy.png'
import casper from 'assets/images/casper.png'
import TeamCard from './TeamCard'

const index = () => {
  return (
    <div id='teamComponent' className='mt-12'>
      <Layout>
        <div className='flex justify-center'>
          <p className='text-6xl font-bold text-black'>Team</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-32'>
          <TeamCard
            image={casper}
            name='Casper "Casper" Elvelid'
            origin='26, from Sweden'
            description="Casper is the degen of the flock. This guy was hustlin' when you were still in diapers. He might not be the most outgoing personality, but something is always cooking inside that mans brain. Give him a glass of wine and a balcony with a sunset, and you get IDEAS." />
          <TeamCard
            image={fischer}
            name='Mads "Fischer" Jehg'
            origin='27, from Denmark'
            description="Fischer is the founder, the visionary and absolute gigachad standing at an impressive height of 6'7'/200 cm. This motherfucker will not back down for anyone. He trusts his instincts and is faithful to his ideologies; honesty and transparency, and quality over quantity." />
          <TeamCard
            image={flippy}
            name='Hugo "Flippy" Perhirin'
            origin='27, from France'
            description="Flippy likes baguettes... But really, this guy is an absolute savage swiss-army knife when it comes to project management. I don't think there's anything he can't help with. From helping with the art, to managing the Discord, to creating branding assets, he really just does stuff." />
        </div>
      </Layout>
    </div>
  )
}

export default index