import React from 'react';
import logo from '../../assets/imagens/logo.png'
import * as S from './styled';
import { Form } from "react-bootstrap"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { loginUsuario, baseUrl } from '../../services/auth';
import { useDispatch, Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../store/users';
import jwt_decode from 'jwt-decode';

const validationSchema = Yup.object({
    email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
    password: Yup.string().required("Valor é requerido"),
});

function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema,
        onSubmit: async values => {
          const { email, password } = values;
          const accessToken = await loginUsuario(email, password);
          const decoded = jwt_decode(accessToken);
          localStorage.setItem('token', accessToken);  
          localStorage.setItem('user', JSON.stringify(decoded));
          dispatch(signIn({id: decoded.id, name: decoded.name, apartament: decoded.apartament, accessToken, permission: decoded.userType, isLogged: true}));
          //@ts-ignore
          baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`
          navigate("/feed")
        }
      });
    return(
        <S.Main>
            <S.Container>
                <S.Logo src={logo} className='mb-3'/>
                <span className='mb-3'>LOGIN</span>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                        <S.FormInput
                            id="email"
                            type="text"
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
                            onChange={formik.handleChange}>
                        </S.FormInput>
                        {formik.errors.password && <S.SpanFormik>{formik.errors.password}</S.SpanFormik>}
                    </Form.Group>
                    <S.LoginBtn type="submit" className='mb-4'>
                        entrar
                    </S.LoginBtn>
                    <S.LoginCadastro to="/signup">cadastre-se</S.LoginCadastro>
                </Form>
            </S.Container>
        </S.Main>
    )
}

export default Login;