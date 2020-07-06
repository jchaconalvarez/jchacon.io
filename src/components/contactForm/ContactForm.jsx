import React from 'react'

import { Button, Form, Input, Label, TextArea } from './contactForm.styles'

export const ContactForm = () => {
  return (
    <Form data-netlify={'true'} method={'POST'} name={'contact'}>
      <Label htmlFor={'name'}>
        Name:
        <Input name={'name'} type={'text'} />
      </Label>

      <Label htmlFor={'email'}>
        Email:
        <Input name={'email'} type={'email'} />
      </Label>

      <Label htmlFor={'message'}>
        Message:
        <TextArea maxLength={'500'} name={'message'} type={'textarea'} />
      </Label>

      <Button type={'submit'}>Submit</Button>
    </Form>
  )
}
