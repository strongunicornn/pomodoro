import { state } from "./state.js";

const audio = {
  work: new Audio('audio/epic.mp3'),
  break: new Audio('audio/to-be-continued.mp3'),
  relax: new Audio('audio/ya-ustala.mp3'),
}



export const alarm = () => {
  audio[state.status].play();
}