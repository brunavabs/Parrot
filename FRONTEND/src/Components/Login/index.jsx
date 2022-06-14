import React from 'react';
import logo from '../../assets/imagens/logo.png'
import * as S from './styled';
import { Container, Button, Form } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Login(){
    return(
        <S.Body>
            <S.Container>
                <S.Logo src={logo} className='mb-3'/>
                <span className='mb-3'>LOGIN</span>
                <Form>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="email"
                            type="text"
                            placeholder="email">
                        </S.FormInput>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="senha"
                            type="password"
                            placeholder="senha">
                        </S.FormInput>
                    </Form.Group>
                    <S.LoginBtn type="submit" className='mb-4'>
                        entrar
                    </S.LoginBtn>
                    <S.LoginCadastro>cadastre-se</S.LoginCadastro>
                </Form>
            </S.Container>
        </S.Body>
    )
}

export default Login;