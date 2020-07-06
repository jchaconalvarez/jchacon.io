import React from 'react'

// Styled Components
import { Field, Information, ListElement, UnorderedList } from './list.styles'

export const List = () => {
  return (
    <UnorderedList>
      <ListElement>
        <Field>Name: </Field>
        <Information>Chacón, Javier</Information>
      </ListElement>

      <ListElement>
        <Field>Height: </Field>
        <Information redacted={true}>REDACTED</Information>
      </ListElement>

      <ListElement>
        <Field>Weight: </Field>
        <Information redacted={true}>REDACTED</Information>
      </ListElement>

      <ListElement>
        <Field>Eye Color: </Field>
        <Information redacted={true}>REDACTED</Information>
      </ListElement>

      <ListElement>
        <Field>Date of Birth: </Field>
        <Information redacted={true}>REDACTED</Information>
      </ListElement>

      <ListElement>
        <Field>Location: </Field>
        <Information>Barcelona, Spain</Information>
      </ListElement>
    </UnorderedList>
  )
}
