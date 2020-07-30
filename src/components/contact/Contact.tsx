import React, { useState } from 'react'

// Components
import { FormField } from '../'

// Images
import GitHub from '../../images/gh.svg'
import LinkedIn from '../../images/in.svg'
import Twitter from '../../images/tw.svg'

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
        {/** Netlify form integration */}
        <input type={'hidden'} name={'form-name'} value={'contact'} />
        <FormField labelText={'Name'} name={'name'} type={'text'} />
        <FormField labelText={'Email'} name={'email'} type={'email'} />
        <FormField labelText={'Message'} name={'message'} type={'textarea'} />
        <button type={'submit'}>Send</button>
      </form>

      <article className={'contact__social'}>
        <a href={'https://www.github.com/jchaconalvarez'} target={'_blank'}>
          <GitHub className={'contact__social-icon'} />
        </a>
        <a
          href={'https://www.linkedin.com/in/jchaconalvarez/'}
          target={'_blank'}
        >
          <LinkedIn className={'contact__social-icon'} />
        </a>
        <a href={'https://www.twitter.com/chacon_jav'} target={'_blank'}>
          <Twitter className={'contact__social-icon'} />
        </a>
      </article>
    </aside>
  )
}
