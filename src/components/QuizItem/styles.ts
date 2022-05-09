import styled from 'styled-components/native';

interface CharContainerProps {
  isSelected: boolean
}
export const Container = styled.View`
  display: flex;
  border-top-width: 2px;
  border-top-color: #FFF;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  border-bottom-width: 2px;
  border-bottom-color: #FFF;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  min-height: 250px;

  padding: 15px 0;;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  text-align: justify;
`;

export const Option = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border: 1px solid #FFF;
  min-height: 50px;
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 5px;

  align-items: center;
`;

export const CharContainer = styled.View<CharContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  width: 30px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.orange : 'transparent'};
`;

export const Char = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
`;

export const OptionTitle = styled.Text`
display: flex;
flex: 1;
  color: ${({ theme }) => theme.colors.text_white};
  margin-left: 10px;
`;