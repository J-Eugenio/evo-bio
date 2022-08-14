import { Platform } from 'react-native';
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
  padding-top: 40px;
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
  display: flex;
  width: 100%;
  max-height: ${RFValue(250)}px;
  margin: 5px 0 5px 0;
  border-radius: 5px;
`;

export const Main = styled.View`
  display: flex;
  flex: 1;
  padding: 30px 0 150px 0;
`;

export const MainText = styled.Text`
  color: ${({ theme }) => theme.colors.text_grey2};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: justify;
  margin-top: 10px;
`;

export const MainTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_grey2};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  font-weight: bold;
`;

export const B = styled.Text`
  font-weight: bold;
`;