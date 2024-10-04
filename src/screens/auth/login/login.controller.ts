import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../services/reduxToolkit/store';
import {loginSuccess} from '../../../services/reduxToolkit/users/users';
import {LoginProps} from './login.interface';

const loginController = (): LoginProps => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [mobile, setMobile] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [zipcode, setZipcode] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state?.users?.isLogin);

  /** user login */
  const onLogin = () => {
    dispatch(
      loginSuccess({
        id: Math.random(),
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        zipcode: zipcode,
        password: password,
      }),
      Alert.alert('Login successfull !'),
      setName(''),
      setEmail(''),
      setMobile(''),
      setAddress(''),
      setZipcode(''),
      setPassword(''),
    );
  };

  return {
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    zipcode,
    setZipcode,
    mobile,
    setMobile,
    password,
    setPassword,
    onLogin,
    isLogin,
  };
};

export default loginController;
