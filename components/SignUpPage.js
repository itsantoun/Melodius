import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignupPress = () => {
    
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
    } else {
      console.log(`Signing up with first name: ${firstName}, last name: ${lastName}, username: ${username}, and password: ${password}`);
    }
     if (!isValidEmail(Email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
  };
   const isValidEmail = (email) => {
    // regular expression to check if email input matches the required pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  

  return (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#a8835a"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#a8835a"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={Email}
            onChangeText={setEmail}
            placeholderTextColor="#a8835a"
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#a8835a"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#a8835a"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="#a8835a"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.signupText}>Already have an account? Log in here</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a8835a',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#a8835a',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    color: '#a8835a',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#a8835a',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  signupText: {
    color: '#a8835a',
    marginTop: 15,
  },
});


export default SignUpPage;