import logo from '../../assets/images/logo.jpg'
import switchOn from '../../assets/images/toggle-on .svg'
import switchOff from '../../assets/images/toggle-off.svg'

import * as S from './HeaderStyle'


interface HeaderProps {
   handleThemeSwitcher: () => void
   isDarkTheme: boolean
}


export const Header: React.FC<HeaderProps> = ({ handleThemeSwitcher, isDarkTheme }) => {
   return (
      <S.HeaderComp>
         <S.HeaderWrapper>
            <S.LogoLink>
               <S.HeaderLogo
                  src={logo}
                  width={70}
                  alt={"Imagem do câmbio de marchas de um veículo. "}
               />

               <S.Title>GarageHub</S.Title>
            </S.LogoLink>

            <S.ThemeDiv>
               {isDarkTheme ?
                  <S.ThemeButton onClick={handleThemeSwitcher}>
                     <S.ThemeImgOn
                        src={switchOn}
                        alt='Image de um switch na posição ligada'
                     />
                     Light
                  </S.ThemeButton>
                  :
                  <S.ThemeButton onClick={handleThemeSwitcher}>
                     <S.ThemeImgOff
                        src={switchOff}
                        alt='Image de um switch na posição desligada'
                     />
                     Dark
                  </S.ThemeButton>
               }
            </S.ThemeDiv>
         </S.HeaderWrapper>
      </S.HeaderComp>
   )
}
