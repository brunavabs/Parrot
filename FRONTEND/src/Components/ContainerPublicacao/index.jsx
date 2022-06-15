import React from 'react';
import * as S from './styled';



function ContainerPublicacao({children}){
    return(
        <S.Container>
            {children}
        </S.Container>
    )
}

export default ContainerPublicacao;