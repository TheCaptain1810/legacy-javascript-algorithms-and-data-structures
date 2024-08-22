function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("800-692-7753")); // true
console.log(telephoneCheck("8oo-six427676;laskdjf")); // false
