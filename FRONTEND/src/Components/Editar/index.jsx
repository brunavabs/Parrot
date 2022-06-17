import React from 'react';
import logo from '../../assets/imagens/logo.png'
import * as S from './styled';
import { Form, Button } from "react-bootstrap"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { baseUrl, updateUser } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../UserInfo';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify'

const validationSchema = Yup.object({
    name: Yup.string().required("Valor é requerido"),
    email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("Valor é requerido"),
    apartament: Yup.string().required("Valor é requerido"),
});

function Editar(){
    function deslogar(){
        localStorage.clear();
        navigate('/')
    }
    const { id } = useParams();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            id: id,
            name: '',
            email: '',
            password: '',
            apartament: '',
        },
        validationSchema,
        onSubmit: async values => {
            try {
                const { id, name, email, password, apartament } = values;
                await updateUser(id, name, email, password, apartament);
                toast.success('Usuário atualizado com sucesso!');
                deslogar()
            } catch(error) {
                toast.warn('Erro ao atualizar o usuário!')
            }
            
        }
    })
    return(
        <S.Main>
            <S.Container>
                <Link to="/feed"><S.Logo src={logo} className='mb-3'/></Link>
                <span className='mb-3'>EDITAR USUÁRIO</span>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="name"
                            type="text"
                            placeholder="nome"
                            value={formik.values.name}
                            onChange={formik.handleChange}>
                        </S.FormInput>
                        {formik.errors.name && <S.SpanFormik>{formik.errors.name}</S.SpanFormik>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="email"
                            type="email"
                            placeholder="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}>
                        </S.FormInput>
                        {formik.errors.email && <S.SpanFormik>{formik.errors.email}</S.SpanFormik>}
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
                        {formik.errors.password && <S.SpanFormik>{formik.errors.password}</S.SpanFormik>}
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
                        {formik.errors.apartament && <S.SpanFormik>{formik.errors.apartament}</S.SpanFormik>}
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <S.FormInput
                            id="linkImage"
                            type="text"
                            placeholder="link da foto">
                        </S.FormInput>
                    </Form.Group>
                    <S.LoginBtn type="submit">
                        editar
                    </S.LoginBtn>
                </Form>
            </S.Container>
        </S.Main>
    )
}

export default Editar;