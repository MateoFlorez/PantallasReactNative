import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/styles';

// Generate component HomeScreen
const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={{borderRadius:5, backgroundColor:'green'}}
          onPress={()=>{
            navigation.navigate('Profile', { name: 'Rachel', username: 'rachel4689' })
          }}
        >
          <Text style={{color:'white', padding:10, fontSize:16}}> Go to user Profile </Text>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen