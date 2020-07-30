import React from 'react'

// Styles
import './formField.scss'

type FormFieldProps = {
  labelText?: string
  name: string
  type: string
}

export const FormField: React.FC<FormFieldProps> = ({
  labelText,
  name,
  type,
}) => {
  return (
    <div className={'form-field'}>
      {labelText && <label className={'form-field__label'}>{labelText}</label>}
      {type === 'textarea' ? (
        <textarea className={'form-field__input'} name={name} />
      ) : (
        <input className={'form-field__input'} name={name} type={type} />
      )}
    </div>
  )
}
