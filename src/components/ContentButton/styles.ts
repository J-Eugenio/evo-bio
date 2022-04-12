import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: .9
})`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${RFValue(20)}px;
  height: ${RFValue(380)}px;
  width: 300px;
  margin-right: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primary};;
`;

export const ImageBackground = styled.ImageBackground`
  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const Main = styled.View`
  display: flex;
  flex: 1;
  margin: 10px;
`;

export const TitleGroup = styled.View`
  position: absolute;
  padding: 5px;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.6);
  bottom: 40px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`;
