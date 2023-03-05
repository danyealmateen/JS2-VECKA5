function getCookieItem(key) {
  let value;

  const keyValueArray = document.cookie.split(";");

  keyValueArray.forEach((pair) => {
    const trimmed = pair.trim();

    if (trimmed.startsWith(key + "=")) {
      const i = trimmed.indexOf("=");
      value = trimmed.substring(i + 1, trimmed.length);
    }
  });

  return value;
}
const ageValue = getCookieItem("age");
const nameValue = getCookieItem("name");
console.log(ageValue, nameValue);
