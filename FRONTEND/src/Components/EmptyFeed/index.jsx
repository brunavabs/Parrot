import React from 'react';
import EmptyIcon from '../../assets/imagens/icone.png'
import * as S from './styled';


function EmptyFeed(){
    return(
        <S.Container>
            <S.EmptyText>Você ainda não fez nenhuma publicação :(</S.EmptyText>
            <S.EmptyIcon src={EmptyIcon}></S.EmptyIcon>
        </S.Container>   
    )
}

export default EmptyFeed;