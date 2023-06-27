import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.75rem;
  }
`
export const Location = styled.div`
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
`

export const CartButtonContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  cursor: pointer;

  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
