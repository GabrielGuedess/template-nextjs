import * as S from './styles';
import { type LogoProps } from './types';

export const Logo = ({ hasShadow = true }: LogoProps) => (
  <S.Wrapper hasShadow={hasShadow} aria-label="Logo React">
    <S.Atom>
      <S.Electron />
      <S.Electron />
      <S.Electron />
    </S.Atom>
  </S.Wrapper>
);
