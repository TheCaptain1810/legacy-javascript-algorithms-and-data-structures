function palindrome(str) {
  let firstString = str
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  let secondString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (firstString === secondString) {
    return true;
  }
  return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
