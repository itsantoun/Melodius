import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([
    {
      id: '1', 
      user: {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      image: 'https://i.pinimg.com/736x/90/a7/5f/90a75f34cd6cb333e0ec484466b013b3.jpg',
      likes: 5,
    },
    {
      id: '2',
      user: {
        name: 'Jane Smith',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      image: 'https://cdn.ustatik.com/musescore/scoredata/g/fcad6f939a6b9d55f2d8013694808d81924a30e2/score_0.png?no-cache=1618317569',
      likes: 12,
    },
    {
      id: '3',
      user: {
        name: 'Bob Johnson',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
      },
      image: 'https://groovewiz.com/wp-content/uploads/2021/04/Piano-Hands-Cover.jpg',
      likes: 8,
    },
  ]);

  const handleLikePress = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

const handleLogout = () => {
  navigation.navigate('Login');
};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png' }} style={styles.userImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={{ uri: item.user.image }} style={styles.userImage} />
              <Text style={styles.userName}>{item.user.name}</Text>
            </View>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <TouchableWithoutFeedback onPress={() => handleLikePress(item.id)}>
              <Icon name="heart" size={30} color={item.likes > 0 ? 'red' : 'black'} />
            </TouchableWithoutFeedback>
            <Text style={styles.likes}>{item.likes} likes</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPost')}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logout: {
    color: '#fff',
    fontWeight: 'bold',
  },
post: {
marginVertical: 10,
marginHorizontal: 15,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 10,
padding: 10,
},
postHeader: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
userImage : {
width: 50,
height: 45,
borderRadius: 25,
marginRight: 10,
},
userName: {
fontWeight: 'bold',
},
postImage: {
width: '100%',
height: 200,
marginVertical: 10,
},
likes: {
marginTop: 10,
},

addButton: {
position: 'absolute',
bottom: 20,
right: 20,
backgroundColor: 'blue',
padding: 10,
borderRadius: 50,
elevation: 3,
},
});

export default MainScreen;