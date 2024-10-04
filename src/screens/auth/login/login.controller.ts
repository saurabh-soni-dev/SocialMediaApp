import React from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../services/reduxToolkit/users/users';
import { LoginProps } from './login.interface';
import { useNavigation } from '@react-navigation/native';

const loginController = (): LoginProps => {
  const navigation = useNavigation()
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [mobile, setMobile] = React.useState<string>('');

  const dispatch = useDispatch();

  /** user login */
  const onLogin = () => {
    dispatch(
      loginSuccess({
        id: Math.random(),
        name: name,
        email: email,
        mobile: mobile,
      }),
      Alert.alert('Login successfull !'),
      setName(''),
      setEmail(''),
      setMobile(''),
    );
    navigation.navigate('Feed')
  };

  return {
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    onLogin,
  };
};

export default loginController;
