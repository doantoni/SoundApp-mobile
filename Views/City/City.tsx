import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../../globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { ISound } from "interfaces/sound";
import { playSound } from "../../utils/playSound";
import { Audio } from "expo-av";

const City = () => {
  const [sound, setSound] = React.useState<Audio.Sound>();

  const sounds: ISound[] = [
    {
      title: "Horn",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674420449/SoundApp/City/car-horn-6408_xa4jtl.mp3",
    },
    {
      title: "Traffic",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674421165/SoundApp/City/city-traffic-outdoor-6414_kscvsn.mp3",
    },
    {
      title: "Highway",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674421197/SoundApp/City/highway-14475_o5uw9b.mp3",
    },
  ];
  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <LinearGradient
      colors={["#fedc2a99", "#57dd79b3", "#0077ffb3"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.7, 1]}
      style={styles.container}
    >
      <View style={styles.flexWrap}>
        {sounds.map((sound) => {
          return (
            <Pressable
              key={sound.title}
              style={styles.button}
              onPress={() => playSound(sound.pathToAudio, setSound)}
            >
              <Text style={styles.text}>🌃 {sound.title}</Text>
            </Pressable>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default City;
