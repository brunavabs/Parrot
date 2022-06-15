import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'


export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  font-family: 'Questrial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #C5C5C5;
  max-width: 700px;
  margin: 0 auto;
  padding: 45px 100px 45px 30px;
`

export const SubContainer = styled.div`
display: flex;
gap: 25px;
align-items: center;
`

export const ImagePerfil = styled.img`
width: 70px;
height: 70px;
`
export const DadosPerfil = styled.div`
display: flex;
flex-direction: column;
`

export const DadosPerfilTitulo = styled.h3`
font-size: 24px;
color: #76BB4C;
`

export const SubContainerEditarBtn = styled.div`
align-self: flex-start;
`

export const EditarBtn = styled(Button)`
background: #76BB4C;
border-radius: 30px;
padding: 0 20px;
border: none;
transition: .3s;
&:hover {
    background-color: #4CAF50;
  }
`