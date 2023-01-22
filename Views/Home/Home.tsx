import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import { styles } from "../../globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import image from "../../assets/icon.png";
interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  return (
    <LinearGradient
      colors={["#fedc2a99", "#57dd79b3", "#0077ffb3"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.7, 1]}
      style={styles.container}
    >
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/icon.png")}
      />
      <Text style={styles.mainTitle}>Tribaninjo</Text>

      <View style={styles.flexWrap}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Filip", { name: "Filip" })}
        >
          <Text style={styles.text}>🐴 Filip</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Patricija", { name: "Patricija" })
          }
        >
          <Text style={styles.text}>💍🙅🏻‍♀️ Patricija</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default Home;
