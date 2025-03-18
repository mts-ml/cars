import { useRouteError } from 'react-router-dom'
import arrow from '../../assets/images/arrow.svg'

import * as S from './ErrorPageStyle'


interface RouteError {
   status?: number
   statusText?: string
   message?: string
}


export const ErrorPage: React.FC = () => {
   const error = useRouteError() as RouteError


   return (
      <S.Section>
         <S.Title>Oops! Aconteceu algo errado 😢</S.Title>
         {error.status === 404 ? (
            <>
               <S.Subtitle>404 - Página não encontrada!</S.Subtitle>
               <S.Description>A página que você está tentando acessar não existe.</S.Description>
            </>
         ) : (
            <>
               <S.Subtitle>Error inesperado</S.Subtitle>
               <S.Description>{error.statusText || error.message}</S.Description>
            </>
         )}

         <S.Link to="/">
            <S.LeftArrow src={arrow} width={40} alt="Image of a left arrow" />
            Voltar a página inicial
         </S.Link>

      </S.Section>
   )
}
