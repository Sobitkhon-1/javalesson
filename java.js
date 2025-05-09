const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];

function fn(a, b) {
    return a.map((val, i) => val + b[b.length - 1 - i]);
  }
  
  console.log(fn(a, b)); // Output: [5, 5, 5, 5]
  