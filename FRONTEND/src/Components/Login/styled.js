import styled from 'styled-components'
import background from '../../assets/Imagens/background.png'

export const Body = styled.body`
margin: 0;
padding: 0;
height: 100vh;
width: 100vw;
background-image: url('${background}');
display: flex;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 35%;
`

export const Logo = styled.img`
width: 100px;
height: 110px;
`