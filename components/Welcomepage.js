import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.mordeo.org/download/16153/' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Melodious</Text>
        <Text style={styles.subtitle}>Discover and share your favorite music</Text>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.link}>Already have an account? Log in here.</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'AvenirNext-Bold',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'AvenirNext-Regular',
  },
  signupButton: {
    width: 150,
    height: 60,
    backgroundColor: '#F2E4D7',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5A2B',
    fontFamily: 'AvenirNext-DemiBold',
  },
  link: {
    fontSize: 14,
    color: '#fff',
    marginTop: 20,
    fontFamily: 'AvenirNext-Regular',
  },
});

export default WelcomePage;


