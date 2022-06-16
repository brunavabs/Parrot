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
  @media screen and (max-width: 575px) {
    padding: 30px 20px;
    justify-content: center;
  }
`

export const ImagePerfil = styled.img`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const FormPublicar = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
  }
`

export const TextArea = styled(Form.Control)`
  width: 520px;
  resize: none;
  border: 1px solid #8BC34A;
  border-radius: 10px;
  @media screen and (max-width: 685px) {
    width: 420px;
  }
  @media screen and (max-width: 450px) {
    width: 300px;
    height: 150px
  }
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

