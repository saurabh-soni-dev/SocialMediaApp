import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import AuthStack from './stacks/authStack';

const Route: FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Route;
