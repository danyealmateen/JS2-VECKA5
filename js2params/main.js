console.log(location.search);

const searchParams = new URLSearchParams(location.search);
const nameValue = searchParams.get("name");

console.log(searchParams);
console.log(nameValue);

const fruitValue = searchParams.get("fruit");
console.log(fruitValue);
