import React from 'react';
import fotoPerfil from '../../assets/imagens/Captura de Tela 2022-06-06 às 20.31 1.png'
import * as S from './styled';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { baseUrl, publicarPost } from '../../services/auth';

const validationSchema = Yup.object({
    content: Yup.string().required("Insira algo para publicar"),
});

function Publicar(){
    const formik = useFormik({
        initialValues: {
            content: ''
        },
        validationSchema,
        onSubmit: async values => {
            try {
                const { content } = values;
                const accessToken = localStorage.getItem('token');
                baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`
                await publicarPost(content);
                alert('Post publicado com sucesso!');
            } catch(error) {
                alert(`Erro ao cadastrar usuário: ${error}`);
            }
            
        }
    })

    // const userLocalStorage = localStorage.getItem('user')
    // const idLocalStorage = JSON.parse(userLocalStorage).id
    // const path = `/profile/${idLocalStorage}`

    return(
        <S.Container>
                <S.ImagePerfil src={fotoPerfil} alt="Foto do perfil"/>
                <S.FormPublicar onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <S.TextArea id='content' as="textarea" rows={3} value={formik.values.content}
                            onChange={formik.handleChange}>
                        </S.TextArea>
                        {formik.errors.content && <span>{formik.errors.content}</span>}
                    </Form.Group>
                    <S.PublicarBtn type="submit">publicar</S.PublicarBtn>
                </S.FormPublicar>
        </S.Container>
    )
}

export default Publicar;