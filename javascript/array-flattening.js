function flattenArray(arr) {
  return arr.reduce(
    (flat, item) =>
      flat.concat(Array.isArray(item) ? flattenArray(item) : item),
    []
  );
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));
