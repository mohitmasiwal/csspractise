let n = 5;
for (let i = 1; i <= n; i++) {
  let str = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
  console.log(str);
}
let n1 = 5;
for (let i = 1; i <= n; i++) {
  console.log('*'.repeat(i));
}
let n2 = 5;
for (let i = 0; i < n; i++) {
  if (i === 0 || i === n - 1) {
    console.log('* '.repeat(n));
  } else {
    console.log('*' + ' '.repeat(2 * (n - 2) + 1) + '*');
  }
}
let n66 = 5;
for (let i = 1; i <= n; i++) {
  let str = ' '.repeat(n - i) + '*';
  if (i > 1) {
    str += ' '.repeat(2 * (i - 1) - 1) + '*';
  }
  console.log(str);
}
console.log('*'.repeat(2 * n - 1));  // Base of the pyramid
let n = 5;
for (let i = 0; i < n; i++) {
  let str = ' '.repeat(n - i - 1);
  let num = 1;
  for (let j = 0; j <= i; j++) {
    str += num + ' ';
    num = num * (i - j) / (j + 1); // Calculate the next value in the row
  }
  console.log(str);
}


