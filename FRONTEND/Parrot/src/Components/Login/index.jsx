import React from 'react';
import logo from '../../assets/imagens/logo.png'
import * as S from './styled';
import {Container, Button, Form} from "react-bootstrap"


function Login(){
    return(
        <S.Body>
            <S.Container>
                <S.Logo src={logo}/>
                <span>LOGIN</span>
                <Form>
                    <Form.Group className="mb-5">
                        <Form.Control
                            id="email"
                            type="text"
                            placeholder="email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Control
                            id="senha"
                            type="password"
                            placeholder="senha"
                        />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        entrar
                    </Button>
                </Form>
            </S.Container>
        </S.Body>
    )
}

export default Login;