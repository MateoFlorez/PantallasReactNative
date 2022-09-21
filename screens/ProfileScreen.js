import { Text, View } from 'react-native';
import { styles } from '../assets/styles/styles';

// Generate component ProfileScreen
const ProfileScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text>This is {route.params.name}'s Profile</Text>
        <Text>User: {route.params.username}</Text>
      </View>
    );
}

export default ProfileScreen