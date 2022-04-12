// 배열의 각 요소를 제곱하여 더한 값이 최소가 되도록 하는 문제
// Add all element to the power of 2 from the array to find minimum number

// 1번 풀이 - 실제로 답은 제대로 출력되지만 불필요하게 연산을 하게 되는 부분들로 인해서
// 런타임이 더 소요되는 경우가 존재함.
// First solution - It works well with the code, but few unnecessary calculation
// slows down the whole calculation work.

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];

      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];

        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];

        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

function solution(n, works) {
  const heap = new MaxHeap();
  let countNum = n;
  let result = 0;

  for (let i = 0; i < works.length; i++) {
    heap.push(works[i]);
  }

  while (countNum) {
    const temp = heap.pop();

    if (temp) {
      heap.push(temp - 1);
      countNum = countNum - 1;
    } else {
      heap.push(temp);
      countNum = countNum - 1;
    }
  }

  for (let j = 1; j < heap.heap.length; j++) {
    result += Math.pow(heap.heap[j], 2);
  }

  return result;
}

// 2번 풀이 - 불필요한 조건문을 제거 (0일 경우를 구하는 법) 하여 반복문의 사용을 줄이는 것으로
// 연산의 횟수를 줄임
// Second solution - Remove unnecessary conditional statement
// (condition to get result when number 0 is applied) from the code
// to reduce the actual number of calculation.

function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) {
    return 0;
  }

  const heap = new MaxHeap();

  for (const work of works) {
    heap.push(work);
  }

  for (let i = 0; i < n; n++) {
    heap.push(heap.pop() - 1);
  }

  return heap.heap.reduce((a, b) => a + Math.pow(b, 2));
}
