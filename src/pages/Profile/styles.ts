import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
  margin-top: 120px;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 24}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
  padding: 0 32px 32px 32px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  padding: 0 64px 32px 0;
`;

export const LogOut = styled.TouchableOpacity`
  padding: 0 0 32px 64px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin: 0 0 26px;
  margin-left: 90px;
  margin-right: 90px;
  border-radius: 98px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
`;
