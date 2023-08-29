import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { SocialMediaLinks } from '../data/socialmedia'

function Footer() {
  return (
    <div className='flex justify-center bg-white/[0.01] mt-16'>
      <div className="flex flex-col items-center py-12 w-96 lg:w-172">
        <span className='text-lg text-center font-medium lg:text-2xl'>
          Email me with any kind of suggestions, collaborations or just want to talk
        </span>
        <span className='text-base pgradient-text mt-2 mb-4 lg:text-xl lg:mt-4'>
          {SocialMediaLinks.email}
        </span>
        <span className='grid grid-cols-3 gap-x-2 text-3xl lg:my-4'>
          <a href={SocialMediaLinks.twitter} target='_blank' >
            <AiFillTwitterCircle className="pfooter_social_icons" />
          </a>
          <a href={SocialMediaLinks.linkedin} target='_blank' >
            <TiSocialLinkedinCircular className="pfooter_social_icons" />
          </a>
          <a href={SocialMediaLinks.github} target='_blank' >
            <AiFillGithub className="pfooter_social_icons" />
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer