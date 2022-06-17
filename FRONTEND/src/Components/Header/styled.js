import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'Questrial', sans-serif;
  box-sizing: border-box;
  padding: 15px 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);

  @media(max-width: 600px) {
    justify-content: center;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const HeaderGreetings = styled.span`
  font-size: 24px;
  color: #76BB4C;
`

export const HeaderGreetingsLink = styled(Link)`
  text-decoration: none;
  color: #76BB4C;
  &:hover {
    color: #6033AA;
  }
` 

export const HeaderSignOut = styled(Button)`
  color: #6033AA;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
    color: #6033AA;
  }
`