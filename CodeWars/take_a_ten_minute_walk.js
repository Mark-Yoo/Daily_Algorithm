// Take a Ten Minute Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// 파라미터로 전달되는 배열은 동, 서, 남, 북 4방향을 가리키는 글자들을 가지고 있다. 이 배열에 따라 한 블록씩 이동할 때마다 1분씩 소요된다. 산책이 모두 끝난 후에는 다시 집으로 돌아와야 하며, 총 시간은 10분이 넘거나 10분보다 부족해서는 안된다.

function isValidWalk(walk) {
  let EtoW = 0;
  let NtoS = 0;

  walk.forEach(w => {
    if (w === 'e') --EtoW;
    if (w === 'w') ++EtoW;
    if (w === 'n') --NtoS;
    if (w === 's') ++NtoS;
  })
  return !EtoW && !NtoS && walk.length === 10 ? true : false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // 'should return true'
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // 'should return false'
console.log(!isValidWalk(['w'])) // 'should return false'
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // 'should return false'
