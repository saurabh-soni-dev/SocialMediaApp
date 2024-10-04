import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import loginController from './login.controller';
import {style} from './login.style';

const Login = () => {
  const {name, setName, email, setEmail, mobile, setMobile, onLogin} =
    loginController();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={style.keyboardAvoid}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={style.container}>
        <Text style={style.text}>Login</Text>
        <Text style={style.subText}>
          Please enter the User details, like name, email, and mobile.
        </Text>
        <View style={style.formContainer}>
          <TextInput
            style={style.textInput}
            placeholder="John Doe"
            placeholderTextColor={'gray'}
            value={name}
            onChangeText={value => setName(value)}
            keyboardType="default"
            maxLength={20}
          />
          <TextInput
            style={style.textInput}
            placeholder="john.doe@gmail.com"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={value => setEmail(value?.toLowerCase())}
            keyboardType="email-address"
          />
          <TextInput
            style={style.textInput}
            placeholder="1234567890"
            placeholderTextColor={'gray'}
            value={mobile}
            onChangeText={value => setMobile(value)}
            keyboardType="numeric"
            maxLength={10}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btn}
            onPress={onLogin}>
            <Text style={style.btnText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
