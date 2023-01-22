import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../globalStyles";

interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
