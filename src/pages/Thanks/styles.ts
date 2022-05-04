import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 50px;
`;

export const ReferenciaContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  border: 1px solid #FFF;
  margin: 50px;
  padding: 10px;
  padding-bottom: ${RFValue(150)}px;
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

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 10px;;
  z-index: 10;
`;

export const Image = styled.Image`
  display: flex;
  width: ${ Platform.OS === "android" ? RFValue(280) : RFValue(200)}px;
  height: ${RFValue(150)}px;
  margin: 5px 0 5px 0;
  border-radius: 5px;
`;