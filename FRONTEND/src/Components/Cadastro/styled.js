import styled from 'styled-components'
import background from '../../assets/Imagens/background.png'
import { Link } from 'react-router-dom';

export const Body = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
margin: 0;
padding: 0;
height: 100vh;
width: 100vw;
background-image: url('${background}');
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Questrial', sans-serif;
box-sizing: border-box;
`

export const Container = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 70px;
`

export const Logo = styled.img`
width: 170px;
height: 180px;
`

export const FormInput = styled.input`
  width: 300px;
  border: 1px solid #A3A3A3;
  border-radius: 5px;
  padding: 3px;
  ::placeholder {
    text-align: center;
  }
`	

export const LoginBtn = styled.button`
  width: 300px;
  border: none;
  border-radius: 5px;
  background-color: #8BC34A;
  padding: 3px;
  transition: .3s;
  &:hover {
    background-color: #4CAF50;
  }
`

export const LoginCadastro = styled.div`
  text-align: center;
`