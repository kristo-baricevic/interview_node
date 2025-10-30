function getUnique(arr) {
  const newMap = new Map();
  for (const a of arr) {
    newMap.set(a, (newMap.get(a) || 0) + 1);
  }
  return arr.filter((num) => newMap.get(num) === 1);
}

function main() {
  const nums = [3, 1, 2, 3, 4, 4, 5];
  console.log(getUnique(nums));
}

main();
