import { ComponentProps } from 'react'

import { styled } from '../styles'

export const TextArea = styled('textarea', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
  color: '$white',
  background: 'transparent',
  width: '100%',
  resize: 'verical',
  minHeight: 80,

  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
