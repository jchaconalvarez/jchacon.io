import React, { useState } from 'react'

// Components
import { FormField } from '../'

// Images
import gh from '../../images/gh.svg'
import ln from '../../images/in.svg'
import tw from '../../images/tw.svg'

// Styles
import './contact.scss'

export const Contact: React.FC = () => {
  return (
    <aside className={'contact container section'}>
      <h3 className={'contact__title outlined-font outline-secondary'}>
        Contact
      </h3>
      <form
        className={'contact__form'}
        data-netlify={true}
        method={'POST'}
        name={'contact'}
        netlify-honeypot="bot-field"
      >
        //* Netlify form integration
        <input type={'hidden'} name={'form-name'} value={'contact'} />
        <FormField labelText={'Name'} type={'text'} />
        <FormField labelText={'Email'} type={'email'} />
        <FormField isTextarea={true} labelText={'Message'} type={'textarea'} />
        <button type={'submit'}>Send</button>
      </form>

      <article className={'contact__social'}>
        <a href={'https://www.github.com/jchaconalvarez'} target={'_blank'}>
          <img className={'contact__social-icon'} src={gh} alt={'GitHub'} />
        </a>
        <a
          href={'https://www.linkedin.com/in/jchaconalvarez/'}
          target={'_blank'}
        >
          <img className={'contact__social-icon'} src={ln} alt={'LinkedIn'} />
        </a>
        <a href={'https://www.twitter.com/chacon_jav'} target={'_blank'}>
          <img className={'contact__social-icon'} src={tw} alt={'Twitter'} />
        </a>
      </article>
    </aside>
  )
}
