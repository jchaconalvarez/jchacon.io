import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 100%;
  padding: var(--s-3);

  color: inherit;
  background: var(--color-background);
  border: var(--border-small);

  outline: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  *:-webkit-autofill:active {
    box-shadow: 0 0 0 30px var(--color-background) inset;
    -webkit-box-shadow: 0 0 0 30px var(--color-background) inset;

    -webkit-text-fill-color: var(--color-main);
  }
`

export const Label = styled.label``

export const TextArea = styled.textarea`
  width: 100%;
  padding: var(--s-3);

  color: inherit;
  background: var(--color-background);
  border: var(--border-small);

  outline: none;

  resize: none;
`

export const Button = styled.button`
  color: var(--color-main);
  background: var(--color-background);
  border: var(--border-small);

  &:hover,
  &:focus,
  &:active {
    color: var(--color-background);
    background: var(--color-main);
  }
`
