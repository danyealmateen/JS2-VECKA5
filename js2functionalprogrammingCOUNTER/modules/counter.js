const counter = (element) => {
  let count = 0;

  const updateCount = (amount) => {
    count += amount;
    element.innerText = count;
  };

  return {
    add: () => {
      updateCount(1);
    },
    remove: () => {
      updateCount(-1);
    },
  };
};

const firstCounter = counter(document.querySelector("#first h1"));

export { firstCounter };
