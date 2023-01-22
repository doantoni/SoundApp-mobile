import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../../globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { IIzjava } from "interfaces/Izjava";
import { playSound } from "../../utils/playSound";
import { Audio } from "expo-av";

interface Props {
  navigation: any;
}

const Filip = ({ navigation }: Props) => {
  const [sound, setSound] = React.useState<Audio.Sound>();

  const izjave: IIzjava[] = [
    {
      title: "Pitagora",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326766/Tribaninjo/Filip/pitagora_xufovh.mp3",
    },
    {
      title: "Sta si reko??",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326764/Tribaninjo/Filip/stasireko_eaawk8.mp3",
    },
    {
      title: "Biologija",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/biologija_kphksc.mp3",
    },
    {
      title: "Filipov poucak",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nemozes_se_razvest_ako_hcbufy.mp3",
    },
    {
      title: "Nevolim jesti banane",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nevolim_jesti_banane_mdcxsz.mp3",
    },
    {
      title: "Golubovi",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/golubovi_eftjqq.mp3",
    },
    {
      title: "Nemam kapacitete",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nemam_kapacitete_cly9vo.mp3",
    },

    {
      title: "Nije istina",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674326763/Tribaninjo/Filip/nije_istina_wpqxxj.mp3",
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
        {izjave.map((izjava) => {
          return (
            <Pressable
              key={izjava.title}
              style={styles.button}
              onPress={() => playSound(izjava.pathToAudio, setSound)}
            >
              <Text style={styles.text}>🐴 {izjava.title}</Text>
            </Pressable>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default Filip;
