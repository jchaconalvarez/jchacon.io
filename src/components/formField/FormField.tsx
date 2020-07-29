import React from 'react'

// Styles
import './formField.scss'

type FormFieldProps = {
  isTextarea?: boolean
  labelText?: string
  type: string
}

export const FormField: React.FC<FormFieldProps> = ({
  isTextarea = false,
  labelText,
  type,
}) => {
  return (
    <div className={'form-field'}>
      {labelText && <label className={'form-field__label'}>{labelText}</label>}
      {type === 'textarea' ? (
        <textarea className={'form-field__input'} />
      ) : (
        <input className={'form-field__input'} type={type} />
      )}
    </div>
  )
}
