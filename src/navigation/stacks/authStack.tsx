import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import Feed from '../../screens/feed/Feed';
import CreatePost from '../../screens/createPost/CreatePost';
import Profile from '../../screens/profile/Profile';

const Stack = createNativeStackNavigator();
const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Feed'} component={Feed} />
      <Stack.Screen name={'CreatePost'} component={CreatePost} />
      <Stack.Screen name={'Profile'} component={Profile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
