const person = {
  name: 'John',
  age: 30,
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  [Symbol.iterator]() {
    let i = 0;
    const keys = Object.getOwnPropertyNames(this);
    return {
      next: () => {
        return {
          done: i === keys.length,
          value: this[keys[i++]]
        }
      }
    }
  }
}

for (const key of person) {
  console.log(key);
}

// 比较版本号
function compare(v1,op,v2){
  const v1Arr = v1.split('.');
  const v2Arr = v2.split('.');
  const len = Math.max(v1Arr.length,v2Arr.length);
  while(v1Arr.length < len){
    v1Arr.push('0');
  }
  while(v2Arr.length < len){
    v2Arr.push('0');
  }
  for(let i = 0;i < len;i++){
    const num1 = parseInt(v1Arr[i]);
    const num2 = parseInt(v2Arr[i]);
    if(num1 > num2){
      return 1;
    }else if(num1 < num2){
      return -1;
    }
  }
  return 0;
}
console.log(compare('1.0.1','>', '1.0.0'));
