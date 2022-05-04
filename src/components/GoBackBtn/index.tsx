import { useNavigation } from '@react-navigation/native';
import react from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScreenProp } from '../../../App';

import {
  Container
} from './styles';

export function GoBackBtn(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container
      onPress={() => navigation.navigate("HomeStack")}
      style={{ width: 25}}
    >
      <Icon 
        name="chevron-left"
        size={30}
        color="#FFF"
      />
    </Container>
  )
}