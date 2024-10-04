import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC, useMemo} from 'react';
import Feed from '../../screens/feed/Feed';
import CreatePost from '../../screens/createPost/CreatePost';
import Profile from '../../screens/profile/Profile';
import screenName from '../screenName';
import Login from '../../screens/auth/login/Login';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/reduxToolkit/store';

const Stack = createNativeStackNavigator();
const AuthStack: FC = () => {
  const isLogin = useSelector((state: RootState) => state?.users?.isLogin);
  //** Handle initial screen  */
  const getInitialRouteName = () => {
    return isLogin ? 'Feed' : 'Login';
  };
  const initialRouteName = useMemo(() => getInitialRouteName(), [isLogin]);
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenName.Login} component={Login} />
      <Stack.Screen name={screenName.Feed} component={Feed} />
      <Stack.Screen name={screenName.CreatePost} component={CreatePost} />
      <Stack.Screen name={screenName.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
