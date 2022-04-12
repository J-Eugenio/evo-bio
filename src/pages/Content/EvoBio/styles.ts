import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(20)}px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const TitlePrimary = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(22)}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_grey2};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Image = styled.Image`
  width: 180px;
  height: 180px;
`;

export const Main = styled.View`
  display: flex;
  flex: 1;
  border: 1px solid red;
  padding-top: 30px;
`;