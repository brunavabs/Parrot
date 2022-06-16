import React from 'react';
import logo from '../../assets/imagens/logo.png'
import * as S from './styled';
import { Form, Button } from "react-bootstrap"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { cadastroUsuario } from '../../services/auth';

const validationSchema = Yup.object({
    name: Yup.string().required("Valor é requerido"),
    email: Yup.string().email("E-mail não valido").required("Valor é requerido"),
    password: Yup.string().min(6, "Senha fraca. Digite uma senha com mais caracteres").required("Valor é requerido"),
    //passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Digite a mesma senha').required("Valor é requerido"),
    apartament: Yup.string().required("Valor é requerido"),
    //linkImage: Yup.string()
});

function Cadastro(){
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            apartament: '',
        },
        validationSchema,
        onSubmit: async values => {
            try {
                const { name, email, password, apartament } = values;
                await cadastroUsuario(name, email, password, apartament);
                alert('Usuário cadastrado com sucesso!');
            } catch(error) {
                alert(`Erro ao cadastrar usuário: ${error}`);
            }
            
        }
    })
    return(
        <S.Main>
            <S.Container>
                <S.Logo src={logo} className='mb-3'/>
                <span className='mb-3'>CADASTRO</span>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="name"
                            type="text"
                            placeholder="nome"
                            value={formik.values.name}
                            onChange={formik.handleChange}>
                        </S.FormInput>
                        {formik.errors.name && <span>{formik.errors.name}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="email"
                            type="email"
                            placeholder="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}>
                        </S.FormInput>
                        {formik.errors.email && <span>{formik.errors.email}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="password"
                            type="password"
                            placeholder="senha"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            >
                        </S.FormInput>
                        {formik.errors.password && <span>{formik.errors.password}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="passwordConfirmation"
                            type="password"
                            placeholder="confirmar senha">
                        </S.FormInput>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="apartament"
                            type="text"
                            placeholder="unidade/apartamento"
                            value={formik.values.apartament}
                            onChange={formik.handleChange}>
                        </S.FormInput>
                        {formik.errors.apartament && <span>{formik.errors.apartament}</span>}
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <S.FormInput
                            id="linkImage"
                            type="text"
                            placeholder="link da foto">
                        </S.FormInput>
                    </Form.Group>
                    <S.LoginBtn type="submit">
                        entrar
                    </S.LoginBtn>
                </Form>
            </S.Container>
        </S.Main>
    )
}

export default Cadastro;