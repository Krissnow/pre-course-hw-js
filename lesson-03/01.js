const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  let flagArr = [];
  colors.filter((item) => {
    if (item === "черный" || item === "красный" || item === "желтый") {
      flagArr.push(item);
    }
  });

  return flagArr.join("-");
}

console.log(createColorString());
