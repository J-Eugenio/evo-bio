import styled, { css } from 'styled-components/native';

interface btnProps {
  color?: string;
  max?: boolean;
}

interface btnTextProps {
  titleColor: string;
}

export const Container = styled.TouchableOpacity<btnProps>`
  display: flex;
  flex-direction: row;
  background-color: ${({ color }) => color};
  padding: 5px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.text_grey2};
  margin-top: 5px;
  ${({ max }) => max && css`width: 100%`};
`;

export const ButtonTitle = styled.Text<btnTextProps>`
  text-align: center;
  color: ${({ titleColor }) => `${titleColor}`};
`;
