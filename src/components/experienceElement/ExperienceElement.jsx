import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import {
  Company,
  Description,
  Stack,
  StackElement,
  Title,
  Wrapper,
} from './experienceElement.styles'

export const ExperienceElement = ({
  company,
  companyWebsite,
  description,
  stack,
  title,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Company>
        <a href={companyWebsite} target={'_blank'}>
          {company}
        </a>
      </Company>
      {stack && (
        <Stack>
          {stack.map(stackElement => (
            <StackElement>{stackElement}</StackElement>
          ))}
        </Stack>
      )}
      <Description>{description}</Description>
    </Wrapper>
  )
}

ExperienceElement.propTypes = {
  company: PropTypes.string.isRequired,
  companyWebsite: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.array,
  title: PropTypes.string.isRequired,
}

ExperienceElement.defaultProps = {
  stack: null,
}
