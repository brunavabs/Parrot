import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'


export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  font-family: 'Questrial', sans-serif;
  display: flex;
  align-items: flex-start;
  /* justify-content: space-between; */
  box-sizing: border-box;
  border-bottom: 1px solid #C5C5C5;
  max-width: 700px;
  margin: 0 auto;
  padding: 45px 100px 45px 30px;
  gap: 25px;
  @media screen and (max-width: 685px) {
    padding: 35px 15px;
  }
`

export const ImagePerfil = styled.img`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 575px) {
    width: 55px;
    height: 55px;
  }
`
export const DadosPerfil = styled.div`
display: flex;
flex-direction: column;
`

export const NomeEndereco = styled.h3`
font-size: 16px;
color: #76BB4C;
`
export const DataPublicacao = styled.small`
color: #909090;
font-size: 14px;

`
