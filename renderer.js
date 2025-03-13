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
  let audio;

  if (time[0] === '25') {
    setGifFocus(true)
    audio = document.getElementById('audio')
  } else {
    setGifFocus(false)
    audio = document.getElementById('school-audio')
  }

  globalInterval = setInterval(function() {
    seconds--;
    if (seconds >= 0) {
      element.setHTMLUnsafe(toTimeString(seconds));
    }
    if (seconds === 0) {
      audio.play();
      clearInterval(seconds);
      setAllButtonsDisabled(false)
      setGifFocus(false)
      updateCountDown(globalTime)
    }
  }, 1000);
}

function stopTimer() {
  var element = document.getElementById('time')
  clearInterval(globalInterval);
  element.setHTMLUnsafe(toTimeString(globalTime*60));
  setAllButtonsDisabled(false)
  setGifFocus(false)
}

function updateCountDown(timeInMinutes, id) {
  var nextElem = document.getElementById('time')
  nextElem.setHTMLUnsafe(toTimeString(timeInMinutes*60));
  globalTime = timeInMinutes
  
  var body = document.getElementById('time')
  if (id.includes('25')) {
    document.body.style.backgroundColor = 'rgb(186, 90, 90)';
  } else if (id.includes('15')) {
    document.body.style.backgroundColor = 'rgb(66, 117, 153)';
  } else {
    document.body.style.backgroundColor = 'rgb(67, 134, 138)';
  }
}

function setAllButtonsDisabled(disable) {
  document.getElementById("start").disabled = disable;
  document.getElementById("start").style.color = disable ? 'gray' : 'white';
  document.getElementById("start").style.backgroundColor = disable ? 'lightgray' : 'rgb(81, 196, 109)';
  document.getElementById("start").style.cursor = disable ? 'not-allowed' : 'pointer';

  const allOptionButton = document.querySelectorAll(".btn-option")
  let colorBtn;
  for (let i = 0; i < allOptionButton.length; i++) {
    if (allOptionButton[i].id.includes('25')) {
      colorBtn = 'rgb(186, 90, 90)'
    } else if (allOptionButton[i].id.includes('15')) {
      colorBtn = 'rgb(66, 117, 153)'
    } else {
      colorBtn = 'rgb(67, 134, 138)'
    }
    allOptionButton[i].disabled = disable;
    allOptionButton[i].style.color = disable ? 'gray' : 'white';
    allOptionButton[i].style.backgroundColor = disable ? 'lightgray' : colorBtn;
    allOptionButton[i].style.cursor = disable ? 'not-allowed' : 'pointer';
  }

  document.getElementById("reset").disabled = !disable;  
}

function setGifFocus(status) {
  document.getElementById("focus-image").hidden = !status;
  document.getElementById("rest-image").hidden = status;
}