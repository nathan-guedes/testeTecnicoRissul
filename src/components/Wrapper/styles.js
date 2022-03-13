import styled, {css} from 'styled-components/native';
import IconPackage from 'react-native-vector-icons/MaterialCommunityIcons';
import {Layout, fontSize} from '../../utils/Layout';
import {Typography} from '../Typography';

export const Container = styled.View``;

// Header components
export const Title = styled.Text``;

export const Logo = styled.Image``;

export const HeaderWrapper = styled.View`
  height: ${Layout.height(10)};
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: ${Layout.width(4)} ${Layout.height(2.5)};
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
  `}
`;

// Body components

export const WrapperBodyView = styled.View`
  height: ${Layout.height(80)};
  padding: ${Layout.height(1)} ${Layout.width(2)};
`;

// Footer components

export const WrapperFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border: 0px solid #dadada;
  border-top-width: 1px;
`;

export const WrapperIcon = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Layout.height(1)};
`;

export const IconText = styled(Typography)`
  margin-top: ${Layout.height(0.5)};
`;

export const SearchIconWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: ${Layout.height(1)};
  width: ${Layout.width(15)};
  height: ${Layout.width(15)};
  border-radius: ${Layout.height(100)};
  margin-top: -13%;
  background-color: red;
  ${({theme}) => css`
    background: ${theme.colors.secondary};
  `};
`;

export const Icon = styled(IconPackage)`
  ${({theme, size, color}) => css`
    font-size: ${fontSize(size ?? 20)};
    color: ${color ?? theme.colors.gray200};
  `};
`;
