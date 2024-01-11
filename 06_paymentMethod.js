let paymentMethod = "paypal";

switch (paymentMethod) {
  case "credit":
    console.log("Processing Fee is 2%");
    break;
  case "debit":
    console.log("Processing Fee is 1.5%");
    break;
  case "paypal":
    console.log("Processing Fee is 3%");
    break;
}
