import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap'

function Publicar(){
    return(
        <S.Container>
                <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                <S.FormPublicar onSubmit="">
                    <Form.Group>
                        <S.TextArea as="textarea" rows={3}/>
                    </Form.Group>
                    <S.PublicarBtn type="submit">publicar</S.PublicarBtn>
                </S.FormPublicar>
        </S.Container>
    )
}

export default Publicar;