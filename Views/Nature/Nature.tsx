import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../../globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { ISound } from "interfaces/sound";
import { playSound } from "../../utils/playSound";
import { Audio } from "expo-av";

interface Props {
  navigation: any;
}

const Nature = ({ navigation }: Props) => {
  const [sound, setSound] = React.useState<Audio.Sound>();

  const sounds: ISound[] = [
    {
      title: "Rain",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674420461/SoundApp/Nature/rain-and-thunder-nature-sounds-7803_ag4jsm.mp3",
    },
    {
      title: "Tropical",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674421445/SoundApp/Nature/nature-soundstropicaljunglebirds-108380_lhxygu.mp3",
    },
    {
      title: "Fire",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674421452/SoundApp/Nature/crackling-fireplace-nature-sounds-8012_pvpv96.mp3",
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
              <Text style={styles.text}>🌳 {sound.title}</Text>
            </Pressable>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default Nature;
