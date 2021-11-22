// const arr = [1,2,3,4,5,7,8,9,10];

let arr = Array(1e6).fill('data');

arr.reverse();

const used = process.memoryUsage();

for(let key in used) {
    console.log(`${key} ${Math.round(used[key]/ 1024 / 1024 * 100)} MB`)
}