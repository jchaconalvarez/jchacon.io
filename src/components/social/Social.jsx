import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

// Styled Components
import { SocialElement, SocialList } from './social.styles'

export const Social = () => {
  return (
    <SocialList>
      <SocialElement>
        <a href={'https://www.github.com/jchaconalvarez'} target={'_blank'}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </SocialElement>
      <SocialElement>
        <a href={'https://linkedin.com/in/jchaconalvarez'} target={'_blank'}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </SocialElement>
      <SocialElement>
        <a href={'https://twitter.com/chacon_jav'} target={'_blank'}>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </SocialElement>
    </SocialList>
  )
}
