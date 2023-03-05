import Cookie from "./node_modules/js-cookie/dist/js.cookie.mjs";

//Key, value, expiration
Cookie.set("fruit", "apple", { expires: 20 });

const fruitValue = Cookie.get("fruit");
console.log(fruitValue);
