const currencyUnits = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCID = 0;

  // Calculate the total cash in drawer
  for (let [_, amount] of cid) {
    totalCID += amount;
  }

  // If cash in drawer is less than change due
  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  // If cash in drawer equals change due
  else if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Calculate change
  let change = [];
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const [unit, value] = currencyUnits[i];
    if (changeDue >= value && cid[i][1] > 0) {
      let amount = 0;
      while (changeDue >= value && cid[i][1] > 0) {
        changeDue -= value;
        cid[i][1] -= value;
        amount += value;
        changeDue = Math.round(changeDue * 100) / 100;
      }
      change.push([unit, amount]);
    }
  }

  // If unable to return exact change
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

// Example usage:
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
