import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

interface FinishProps {
  enabled: boolean;
}

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(40)}px ${RFValue(20)}px ${RFValue(20)}px ${RFValue(20)}px; 
`;

export const Space = styled.View`
  height: ${RFValue(150)}px; 
`;

export const Logo = styled.Image`
  display: flex;
  height: ${RFValue(250)}px; 
  width: ${RFValue(400)}px; 
  align-items: center;
  justify-content: center;
`;

export const FinishContainer = styled.View``;

export const FinishBtn = styled.TouchableOpacity<FinishProps>`
  display: flex;

  margin-top:5px;
  background-color: ${({ enabled }) =>  enabled ? `#2EA60A` : `#AAA`};
  height: ${RFValue(50)}px; 
  border: 1px solid rgba(255,255,255, 0.2);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const FinishTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${RFValue(20)}px;
`;

export const ModalContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.4);
  padding: 20px;
`;