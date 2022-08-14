import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  height: 95%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(40)}px 2px;
`;

export const SuggestionContainer = styled.ScrollView`
  display: flex;
  border: 1px solid #FFF;
  margin: 30px 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #FFF;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const RefBold = styled.Text`
  font-style: italic;
  font-weight: bold;
  color: #555555;
  text-align: center;
  font-size: 13px;
`;

export const Ref = styled.Text`
  font-style: italic;
  font-weight: 400;
  color: #555555;
  text-align: justify;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const SeggestionContent = styled.View`
  display: flex;
  flex: 1;
  align-items: flex-start;
  margin-top: 20px;
`;