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

