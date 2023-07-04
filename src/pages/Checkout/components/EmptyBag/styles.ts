import styled from 'styled-components'

export const EmptyBagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 3rem;

  width: 28rem;
  padding: 2.5rem;
  border-radius: 20px;
  margin-top: 5rem;

  background: ${(props) => props.theme['base-card']};

  a {
    text-decoration: none;
    text-align: center;
    padding: 12px;
    border-radius: 6px;

    background: ${(props) => props.theme['yellow-medium']};

    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 700;
    line-height: 22.4px;

    cursor: pointer;
  }
`
export const TextToEmptyBag = styled.span`
  display: flex;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 26px;

  color: ${(props) => props.theme['base-subtitle']};
`
