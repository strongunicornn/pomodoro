import { initControl } from "./control.js";
import { state } from "./state.js";


const initPomodoro =()=>{
  initControl();

  state.activeTodo = {
    id : 'defult',
    pomodoro: 0 ,
    title: 'Помодоро',
  }
}

initPomodoro()