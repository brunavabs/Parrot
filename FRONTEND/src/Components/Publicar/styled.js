import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'


export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  font-family: 'Questrial', sans-serif;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  border: 1px solid #C5C5C5;
  max-width: 700px;
  margin: 0 auto;
  padding: 45px 100px 45px 30px;
  gap: 25px;
`

export const ImagePerfil = styled.img`
width: 70px;
height: 70px;
`

export const FormPublicar = styled(Form)`
display: flex;
flex-wrap: wrap;
justify-content: end;
`

export const TextArea = styled(Form.Control)`
width: 520px;
resize: none;
border: 1px solid #8BC34A;
border-radius: 10px;
` 

export const PublicarBtn = styled(Button)`
background: #6033AA;
border-radius: 30px;
padding: 0 40px;
border: none;
transition: .3s;

  &:hover {
    background-color: #4B2681;
  }
`

