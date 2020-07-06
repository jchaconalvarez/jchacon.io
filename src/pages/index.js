import React, { useEffect, useRef, useState } from 'react'

import { ContactForm, Layout, SEO, Social } from '../components'

const AutoType = ({ string }) => {
  const autoTypeRef = useRef(null)

  let i = 0

  const type = () => {
    console.log('auto: ', autoTypeRef)
    autoTypeRef.current.innerText += string.charAt(i)
    i++
    setTimeout(type, 50)
  }

  return autoTypeRef && <span ref={autoTypeRef}>{type()}</span>
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>HOME</h1>
      <AutoType string={'This is a test'} />
      <p>
        You probably haven't heard of them chillwave synth stumptown man braid
        slow-carb fam woke taxidermy four loko. Forage wayfarers 90's photo
        booth. Umami af pork belly everyday carry, occupy YOLO four loko austin
        mustache pinterest vexillologist. Banh mi roof party gentrify, whatever
        asymmetrical thundercats polaroid organic keffiyeh air plant glossier
        chambray. Helvetica wayfarers chia, sartorial cred poke shabby chic
        hoodie 3 wolf moon ramps thundercats. Disrupt venmo iPhone fixie cronut
        post-ironic ugh meh DIY drinking vinegar jean shorts.
      </p>
      <h2>CONTACT</h2>
      <Social />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
