import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const UserPage = ({ navigation }) => {
  const user = {
    name: 'Walter White',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png',
    bio: 'Hello My Name is Walter White! I am a pianist and I love sharing some of my art with you!.',
    photos: [
      { id: '1', source: 'https://www.musictheoryacademy.com/wp-content/uploads/2020/05/How-To-Play-Piano-with-Both-Hands-featured-image.jpg', likes: 10 },
      { id: '2', source: 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90ftvut1348646vmqyo7qeugdg/public', likes: 15 },
      { id: '3', source: 'https://thumbs.dreamstime.com/z/music-note-sheet-difficult-melody-old-paper-abstract-77395391.jpg', likes: 20 },
      { id: '4', source: 'https://cdn2.vectorstock.com/i/1000x1000/92/46/music-note-sheet-vector-669246.jpg', likes: 111 },
      { id: '5', source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz8VoEqhp0e-U17OpIV-o8NY6vYx1cD5A1w&usqp=CAU', likes: 32 },
      { id: '6', source: 'https://cdn.ustatik.com/musescore/scoredata/g/11880b477b685325af421a8b2e66a6f6854b7e1e/score_0.png?no-cache=1462001603', likes: 77 },
      { id: '7', source: 'https://yourmusiclessons.com/wp-content/uploads/2021/11/Improves-Aural-Awareness.jpg', likes: 101 },
      { id: '8', source: 'https://c8.alamy.com/comp/2H2XX3J/a-woman-learns-to-play-the-piano-using-an-application-on-her-phone-2H2XX3J.jpg', likes: 150 },
      { id: '9', source: 'https://i.pinimg.com/originals/1d/b0/87/1db08769ee75c04adb7d30c42c1978bf.png', likes: 209 },
      { id: '10', source: 'https://crusaderbeach.com/wp-content/uploads/edd/2019/10/Random-Acts-CrusaderBeach-pic-255x255.jpg', likes: 141 },
      { id: '11', source: 'https://tvovermind.com/wp-content/uploads/2017/03/Skinny-Pete.jpg', likes: 342 },
      { id: '12', source: 'https://www.arabicmusiclibrary.com/wp-content/uploads/2023/02/%D8%B9%D9%84%D9%89-%D8%AD%D8%B3%D8%A8-%D9%88%D8%AF%D8%A7%D8%AF-%D9%82%D9%84%D8%A8%D9%8A_0001-195x300.png', likes: 177 },
    ],
    followers: 100,
    following: 50,
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const renderPhoto = ({ item }) => {
    const isSelected = selectedImage === item.id;
    return (
      <TouchableOpacity onPress={() => setSelectedImage(isSelected ? null : item.id)}>
        <Image source={{ uri: item.source }} style={[styles.image, isSelected && styles.selectedImage, isSelected && styles.biggerImage]} />
        <Text style={styles.likeCount}>{item.likes} likes</Text>
      </TouchableOpacity>
    );
  };

  const handlePress = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bioContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: user.image }} style={styles.bioProfilePicture} />
          <Text style={styles.bioName}>{user.name}</Text>
        </View>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text>{user.followers} Followers</Text>
          <Text>{user.following} Following</Text>
        </View>
      </View>
      <FlatList
        data={user.photos}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderPhoto}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  bioContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  bioProfilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  bioName: {
    fontSize: 18,
   },
bio: {
fontSize: 16,
marginVertical: 10,
},
image: {
width: 100,
height: 100,
margin: 2,
borderRadius: 5,
},
selectedImage: {
borderColor: 'blue',
borderWidth: 2,
},
biggerImage: {
width: 200,
height: 200,
},
likeCount: {
alignSelf: 'center',
marginTop: 5,
},

});

export default UserPage;

