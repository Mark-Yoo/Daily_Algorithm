// Number of people in the bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// 배열로 들어오는 busStops는 이중배열로 만들어져있으며 배열의 각 요소는 2가지의 상태를 가지고 있다. 첫 번째는 각 정류장에서 탑승하는 인원, 두 번째는 각 정류장에서 내리는 인원이다. 첫 정류장에서는 내리는 사람은 없으며 타는 사람만 있다.

var number = function(busStops){
  // 배열을 map을 사용해 돌며 안에 있는 배열들의 요소들을 뺀 값만 가지고 있는 배열을 만들고 다시 이들을 전부 더한 값을 구한다.
  return busStops.map(busStop => busStop.reduce((acc, cur) => acc - cur)).reduce((acc, cur) => acc + cur);
}

console.log(number([[10,0],[3,5],[5,8]]));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));