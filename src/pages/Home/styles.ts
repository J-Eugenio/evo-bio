import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(40)}px;
`;

export const Main = styled.View`
  display: flex;
  flex: 1;
`;

export const MainScroll = styled.ScrollView`
  max-height: 370px;
`;

export const Separator = styled.View`
  display: flex;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.primary_light};
  margin: 10px 0 10px 0;
  border-radius: 1px;

`;

export const ContentTileGroup = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.text_grey2};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ExtraGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled.View`
  margin-bottom: 10px;
`;

export const TitlePrimary = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(25)}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_grey2};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
