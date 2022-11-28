// Next greater Element concept using Stacks :

// question : find the next greatest element for every element in given array(arr) of length n :
// eg : for [3,1,2,4,5] --> ans is [4,2,4,5,-1]  (if next greatest element is not found replace with -1);

// before going into solution Give it a try --> question link below :
// https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article

function findNextGreatestElement(arr, n) {
  const stack = [];
  const nextGreEleArr = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    nextGreEleArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return nextGreEleArr;
}

// console.log(findNextGreatestElement([3, 1, 2, 4, 5], 5));
// --> output [4,2,4,5,-1]

// similarly we can do next smallest element in array

// before going into solution Give it a try --> question link below :
// https://www.codingninjas.com/codestudio/problems/next-smaller-element_1112581

function findNextSmallestElement(arr, n) {
  const stack = [];
  const nextSmallEleArr = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    nextSmallEleArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return nextSmallEleArr;
}

// console.log(findNextSmallestElement([5, 3, 2, 1, 6], 5));
// --> output [ 3, 2, 1, -1, -1 ]

// Previous greater Element for every element in give array(arr) of length n :

function findPreviousGreatestElement(arr, n) {
  const stack = [];
  const prevGreEleArr = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    prevGreEleArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return prevGreEleArr;
}

// console.log(findPreviousGreatestElement([5, 3, 2, 1, 6], 5));
// output --> [ -1, 5, 3, 2, -1 ]

// In similar way we can do Previous smallest :

// before going into solution Give it a try --> question link below :
// https://practice.geeksforgeeks.org/problems/smallest-number-on-left3403/1?utm_source=gfg&utm_medium=article_practice_tab&utm_campaign=article_practice_tab

function findPreviousSmallestElement(arr, n) {
  const stack = [];
  const prevSmallEleArr = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    prevSmallEleArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return prevSmallEleArr;
}

// console.log(findPreviousSmallestElement([1, 6, 2, 4, 5], 5));
// output --> [ -1, 1, 1, 2, 4 ]

// In before coding examples , we are finding prev or next (gre or small) elements ...
// but lets see how we can find index of prev or next (gre or small) elements of given array(arr) of length n :
// by slight modifying the above code :

// Question : Return the array of indices of next greatest element :

function findNextGreatestEleIndex(arr, n) {
  const stack = [];
  const nextGreEleIdxArr = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    nextGreEleIdxArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return nextGreEleIdxArr;
}

// console.log(findNextGreatestEleIndex([1, 4, 6, 3, 7], 5));
// output --> [ 1, 2, 4, 4, -1 ]

// --> now next Smallest element index array :

function findNextSmallestEleIndex(arr, n) {
  const stack = [];
  const nextSmallEleIdxArr = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    nextSmallEleIdxArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return nextSmallEleIdxArr;
}

// console.log(findNextSmallestEleIndex([7, 6, 8, 3, 1], 5));
// output --> [ 1, 3, 3, 4, -1 ]

// --> now Previous greatest element index array :

function findPreviousGreatestEleIndex(arr, n) {
  const stack = [];
  const prevGreEleIdxArr = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    prevGreEleIdxArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return prevGreEleIdxArr;
}

// console.log(findPreviousGreatestEleIndex([9, 7, 6, 4, 2], 5));
// output  --> [ -1, 0, 1, 2, 3 ]

// --> now Previous Smallest element index array :

function findPreviousSmallestEleIndex(arr, n) {
  const stack = [];
  const prevSmallEleIdxArr = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    prevSmallEleIdxArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return prevSmallEleIdxArr;
}

// console.log(findPreviousSmallestEleIndex([1, 4, 3, 8, 9], 5));
// output  -->[ -1, 0, 0, 2, 3 ]

// Okie lets solve a problem using above concepts :

// Question : For a given array, for each element, find the number of subarray for which that element has the minimum value.
// eg : given arr = [3,1,2,4] ,  ans = [1,6,2,1] ;
// explanation :
// --> for first element 3 --> we can have only one subarray [3] as min value 3 :
// --> for second element 1 --> we can have 6 subarray with 1 as min value : [1] ,[3,1] , [1,2] , [3,1,2], [3,1,2,4] , [1,2,4]
// --> for third element 2 --> we have can 2 subarray( [2] , [2,4] ) with 2 as min value :
// --> for fourth element 4 --> only one subArray [4] as min value 4 :

// solution -->

function findSubArrayMinimum(arr, n) {
  const prevSmallEleIdxArr = findPreviousSmallestEleIndex(arr, n);
  const nextSmallEleIdxArr = findNextSmallestEleIndex(arr, n);

  const ans = [];

  for (let i = 0; i < n; i++) {
    let start = i - prevSmallEleIdxArr[i];
    let end = nextSmallEleIdxArr[i] == -1 ? n - i : nextSmallEleIdxArr[i] - i;
    ans.push(start * end);
  }
  return ans;
}

// console.log(findSubArrayMinimum([3, 1, 2, 4], 4));
//  output --> [ 1, 6, 2, 1 ]

// LeetCode Problem : 907. Sum of Subarray Minimums :

// Question Link : https://leetcode.com/problems/sum-of-subarray-minimums/

// Given an array of integers arr, find the sum of min(b),
// where b ranges over every (contiguous) subarray of arr.
// Since the answer may be large, return the answer modulo 109 + 7.

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation:
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.

// solution :

var sumSubarrayMins = function (arr) {
  let n = arr.length;
  function findPreviousSmallestOrEqualsToEleIndex(arr, n) {
    const stack = [];
    const prevSmallEleIdxArr = [];

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
        stack.pop();
      }
      prevSmallEleIdxArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
      stack.push(i);
    }
    return prevSmallEleIdxArr;
  }

  function findNextSmallestEleIndex(arr, n) {
    const stack = [];
    const nextSmallEleIdxArr = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      nextSmallEleIdxArr[i] = stack.length == 0 ? n : stack[stack.length - 1];
      stack.push(i);
    }
    return nextSmallEleIdxArr;
  }

  const prevSmallOrEqToEleIdxArr = findPreviousSmallestOrEqualsToEleIndex(
    arr,
    n
  );
  const nextSmallEleIdxArr = findNextSmallestEleIndex(arr, n);

  let ans = 0;

  for (let i = 0; i < n; i++) {
    let start = i - prevSmallOrEqToEleIdxArr[i];
    let end = nextSmallEleIdxArr[i] - i;
    ans += start * end * arr[i];
  }
  return ans;
};

// console.log(sumSubarrayMins([71, 55, 82, 55]));
// output --> 593

//  to get accepted in LeetCode -->
// add this -->  let mod = 1000000007; and while returning ans ---> return (ans % mod);

// GFG Problem --> Stock span problem
// get into into this for problem : Try yourself first and if not get into solution :
//https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1

// solution :

function calculateSpan(price, n) {
  function findPreviousGreatestEleIndex(arr, n) {
    const stack = [];
    const prevGreEleIdxArr = [];

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      prevGreEleIdxArr[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
      stack.push(i);
    }
    return prevGreEleIdxArr;
  }

  const prevGreArr = findPreviousGreatestEleIndex(price, n);
  const ans = [];

  for (let i = 0; i < n; i++) {
    let j = prevGreArr[i] == -1 ? i + 1 : i - prevGreArr[i];
    ans.push(j);
  }
  return ans;
}

// console.log(calculateSpan([100, 80, 60, 70, 60, 75, 85], 7));
// output-- > [1, 1, 1, 2, 1, 4, 6];
