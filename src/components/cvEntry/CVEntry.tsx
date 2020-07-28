import React from 'react'

// Styles
import './cvEntry.scss'

type CVEntryProps = {
  company: string
  date: string
  role: string
  stack: string[]
  summary: string
}

export const CVEntry: React.FC<CVEntryProps> = ({
  company,
  date,
  role,
  stack,
  summary,
}) => {
  return (
    <article className={'cv-entry'}>
      <h4 className={'cv-entry__date'}>{date}</h4>
      <div className={'cv-entry__role-information'}>
        <h3 className={'cv-entry__role'}>{role}</h3>
        <h2 className={'cv-entry__company outlined-font'}>{company}</h2>
      </div>
      <ul className={'cv-entry__stack'}>
        {stack.map((stackElement, index) => (
          <li className={'cv-entry__stack-element'} key={index}>
            {stackElement}
          </li>
        ))}
      </ul>
      <p className={'cv-entry__summary'}>{summary}</p>
    </article>
  )
}
