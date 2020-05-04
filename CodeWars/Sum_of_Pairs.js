// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

// 파라미터로 전달되는 배열 안에서 합이 s와 같은 숫자 짝을 찾고 만약 짝이 여럿일 경우 그 중 전체 숫자가 먼저 오는 쪽을 찾아서 반환하여야 한다.

// 처음 풀어낸 코드로, 모든 테스트를 통과하였지만 이중for문으로 인해 실행 속도가 느려진 케이스이다.

// var sum_pairs=function(ints, s){
//   let result = [];
//   let distance = [];

//   for (let i = 0; i < ints.length; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       if (ints[i] + ints[j] === s) {
//         result.push([ints[i], ints[j]]);
//         distance.push(j);
//       }
//     }
//   }
//   if (!result.length) return undefined;
//   return result.filter(innerArr => innerArr[1] === ints[Math.min(...distance)]);
// }

l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(sum_pairs(l1, 8)); // [1, 7]
console.log(sum_pairs(l2, -6)); // [0, -6]
console.log(sum_pairs(l3, -7)); // undefined
console.log(sum_pairs(l4, 2)); // [1, 1]
console.log(sum_pairs(l5, 10)); // [3, 7]
console.log(sum_pairs(l6, 8)); // [4, 4]
console.log(sum_pairs(l7, 0)); // [0, 0]
console.log(sum_pairs(l8, 10)); // [13, -3]