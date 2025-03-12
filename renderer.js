var globalInterval;
var globalTime = 25

function toTimeString(seconds) {
  const time = (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
  return time.split(':').splice(1).join(':');
}

function startTimer() {
  var element = document.getElementById('time')
  var duration = element.textContent;
  var time = duration.split(':');
  var seconds = (+time[0]) * 60 + (+time[1]);

  setAllButtonsDisabled(true)
  
  globalInterval = setInterval(function() {
    seconds--;
    if (seconds >= 0) {
      element.setHTMLUnsafe(toTimeString(seconds));
    }
    if (seconds === 0) {
      if (globalTime === 25) {
        alert('Time for a break!');
      } else {
        alert('Time to work!');
      }
      clearInterval(seconds);
      setAllButtonsDisabled(false)
      updateCountDown(globalTime)
    }
  }, 1000);
}

function stopTimer() {
  var element = document.getElementById('time')
  clearInterval(globalInterval);
  element.setHTMLUnsafe(toTimeString(globalTime*60));
  setAllButtonsDisabled(false)
}

function updateCountDown(timeInMinutes) {
  var nextElem = document.getElementById('time')
  nextElem.setHTMLUnsafe(toTimeString(timeInMinutes*60));
  globalTime = timeInMinutes
}

function setAllButtonsDisabled(disable) {
  document.getElementById("start").disabled = disable;
  const allOptionButton = document.querySelectorAll(".btn-option")
  for (let i = 0; i < allOptionButton.length; i++) {
    allOptionButton[i].disabled = disable;
  }

  document.getElementById("reset").disabled = !disable;
}