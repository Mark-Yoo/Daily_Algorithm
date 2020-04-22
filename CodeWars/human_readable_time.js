// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// 파라미터로 전달되는 숫자를 '초'로 가정하여 사람이 읽을 수 있는 시간단위인 시, 분, 초로 표시해야 한다.

// for문을 사용한 방법

// function humanReadable(seconds) {
//   let sec = 0;
//   let min = 0;
//   let hour = 0;
  
//   for (let i = 0; i < seconds; i++) {
//     ++sec;
//     if (sec === 60) {
//       sec = 0;
//       ++min;
//       if (min === 60) {
//         min = 0;
//         ++hour;
//       }
//     }
//   }
//   return `${hour < 10 ? '0'+hour : hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`
// }


// for문을 사용한 방법은 여러번 동작하면서 계산을 해야하므로 더 빠르고 간단한 코드로 리팩토링

function humanReadable(seconds) {
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60) % 60;
  const hour = Math.floor(seconds / 60 / 60); 
  
  return `${hour < 10 ? '0'+hour : hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
}

console.log(humanReadable(0)) // '00:00:00'
console.log(humanReadable(5)) // '00:00:05'
console.log(humanReadable(60)) // '00:01:00'
console.log(humanReadable(86399)) // '23:59:59'
console.log(humanReadable(359999)) // '99:59:59'