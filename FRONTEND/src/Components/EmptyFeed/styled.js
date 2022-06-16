import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  font-family: 'Questrial', sans-serif;
  box-sizing: border-box;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #C5C5C5;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const EmptyIcon = styled.img`
width: 126px;
height: 126px;
`

export const EmptyText = styled.span`
font-size: 22px;
color: #909090;
margin-top: 110px;
@media screen and (max-width: 450px) {
    font-size: 18px;
  }
`