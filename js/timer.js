import { alarm } from "./alarm.js";
import { changeActiveBtn } from "./control.js";
import { state } from "./state.js"
import { addZero } from "./util.js";

const minutsElement = document.querySelector('.time__minutes')
const secondsElement = document.querySelector('.time__seconds')

export const showTime = (seconds) => {
  minutsElement.textContent = addZero(Math.floor(seconds / 60))
  secondsElement.textContent = addZero(seconds % 60)
}

export const startTimer = () => {
  state.timeLeft -= 5;

  showTime(state.timeLeft);

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
  }

  if (state.timeLeft <= 0) {

    alarm();
    console.log(state.activeTodo);

    if (state.status === 'work') {
      state.activeTodo.pomodoro += 1;
      if (state.activeTodo.pomodoro % state.count) {
        state.status = 'break'
      } else {
        state.status = 'relax'
      }

    }


    else {
      state.status = 'work'
    }
    state.timeLeft = state[state.status] * 60;
    changeActiveBtn(state.status);
    startTimer();
  }
}