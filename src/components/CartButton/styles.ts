import styled from 'styled-components'
import { CartButtonProps } from './index'

export const CartButtonContainer = styled.button<CartButtonProps>`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme[props.background]};
  color: ${(props) => props.theme[props.color]};

  cursor: pointer;
`
