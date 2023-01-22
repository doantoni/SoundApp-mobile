import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../../globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { IIzjava } from "interfaces/Izjava";
import { playSound } from "../../utils/playSound";
import { Audio } from "expo-av";

const Patricija = () => {
  const [sound, setSound] = React.useState<Audio.Sound>();

  const izjave: IIzjava[] = [
    {
      title: "Blago tebi",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674324774/Tribaninjo/blagotebii_cau0ax.mp3",
    },
    {
      title: "Fala napokon neko??",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674324894/Tribaninjo/falanapokonneko_e2n8lp.mp3",
    },
    {
      title: "Glediju me kak da sam luda",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674324923/Tribaninjo/gledijumekakdasamluda_hkmfit.mp3",
    },
    {
      title: "Ja nikat nebum imala decu",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674324986/Tribaninjo/janikadnebumimaladecu_jn80ae.mp3",
    },
    {
      title: "Nisam ja Sabina",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674325011/Tribaninjo/nisamjasabina_o3xibn.mp3",
    },
    {
      title: "Nočna mora",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674325083/Tribaninjo/senjamdasamdobiladete_ojl0c7.mp3",
    },
    {
      title: "Svadba bez muža",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674325113/Tribaninjo/svadbabezmuz%CC%8Ca_k9na1h.mp3",
    },
    {
      title: "To nema veze s godinama",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674325136/Tribaninjo/tonemavezesgodinama_g4gycw.mp3",
    },
    {
      title: "Zakaj se to nebi smelo?",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674325154/Tribaninjo/zakajsetonebismelo_e15n6a.mp3",
    },
    {
      title: "Život.",
      pathToAudio:
        "https://res.cloudinary.com/doantoni/video/upload/v1674325173/Tribaninjo/Z%CC%8Civot._rjjbzn.mp3",
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
              <Text style={styles.text}>💍🙅🏻‍♀️ {izjava.title}</Text>
            </Pressable>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default Patricija;
