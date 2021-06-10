export const calculatePrice = (quanity, price) => {
  if (quanity !== undefined) {
    let getNumber = (num) => Number(quanity);
    var numbers = Array.from(String(quanity), getNumber);
    let totalPrice = 0;

    numbers.map((n) => {
      let entry = n * +price;
      totalPrice += entry;
    });
    return totalPrice;
  }
};
