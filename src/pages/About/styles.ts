import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(40)}px;
`;

export const ReferenciaContainer = styled.ScrollView`
  display: flex;
  flex: 1;
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

export const Ref = styled.Text`
  font-style: italic;
  color: #555555;
  text-align: justify;
  margin-bottom: 15px;
`;

export const RefBold = styled.Text`
  font-style: italic;
  font-weight: bold;
  color: #555555;
  text-align: center;
  font-size: 13px;
`;

export const RefButton = styled.TouchableOpacity`
  width: 350px;
  height: 20px;
  margin-bottom: 20px;
`;

export const RefButtonText = styled.Text`
  color: #00F;
  font-size: 12px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 10px;;
  z-index: 10;
`;