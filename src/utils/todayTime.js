import React from 'react';

const todayTime = () => {
  let now = new Date();
  let todayYear = now.getFullYear();
  let todayMonth = now.getMonth() + 1
  let todayDate = now.getDate();
  let hours = now.getHours(); 
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  return todayYear+'-'+('00'+todayMonth).slice(-2)+'-'+('00'+todayDate).slice(-2)+' '+('00'+hours).slice(-2)+':'+('00'+minutes).slice(-2)+':'+('00'+seconds).slice(-2);

}

export default todayTime;
