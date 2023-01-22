import { Audio } from "expo-av";
import sound from "../assets/sounds/bell.mp3";
import React from "react";

export const playSound = async (
  pathToAudio: string,
  setSound: React.Dispatch<React.SetStateAction<any>>
) => {
  const { sound } = await Audio.Sound.createAsync({ uri: pathToAudio });
  setSound(sound);
  await sound.playAsync();
};
