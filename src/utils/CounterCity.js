const counter = (itens, type) => {
  let cont = [];
  let total = 1;
  for (let i = 0; i < itens.length; i++) {
    if (type === "city") {
      if (i < itens.length - 1 && itens[i].city === itens[i + 1].city) {
        total++;
      } else {
        cont.push({ label: itens[i].city, y: total });
        total = 1;
      }
    }
    if (type === "state") {
      if (
        i < itens.length - 1 &&
        itens[i].state_name === itens[i + 1].state_name
      ) {
        total++;
      } else {
        cont.push({ label: itens[i].state_name, y: total });
        total = 1;
      }
    }
    if (type === "country") {
      if (
        i < itens.length - 1 &&
        itens[i].country_name === itens[i + 1].country_name
      ) {
        total++;
      } else {
        cont.push({ label: itens[i].country_name, y: total });
        total = 1;
      }
    }
  }
  return cont;
};

export default counter;
