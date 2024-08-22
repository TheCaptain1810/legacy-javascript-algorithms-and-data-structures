function rot13(str) {
  const cipher = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  };

  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (cipher[char]) {
      result += cipher[char];
    } else {
      // If the character is not in the cipher, add it as it is
      result += char;
    }
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC"));
