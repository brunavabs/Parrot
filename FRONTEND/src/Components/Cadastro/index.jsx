import React from 'react';
import logo from '../../assets/imagens/logo.png'
import * as S from './styled';
import { Form } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Cadastro(){
    return(
        <S.Body>
            <S.Container>
                <S.Logo src={logo} className='mb-3'/>
                <span className='mb-3'>CADASTRO</span>
                <Form>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="name"
                            type="text"
                            placeholder="nome">
                        </S.FormInput>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="email"
                            type="email"
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
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="confirmaSenha"
                            type="password"
                            placeholder="confirmar senha">
                        </S.FormInput>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="apartamento"
                            type="text"
                            placeholder="unidade/apartamento">
                        </S.FormInput>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <S.FormInput
                            id="linkImagem"
                            type="text"
                            placeholder="link da foto">
                        </S.FormInput>
                    </Form.Group>
                    <S.LoginBtn type="submit">
                        entrar
                    </S.LoginBtn>
                </Form>
            </S.Container>
        </S.Body>
    )
}

export default Cadastro;