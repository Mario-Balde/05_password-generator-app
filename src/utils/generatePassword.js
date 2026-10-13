const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getRandomIndex(max) {
  const randomValues = new Uint32Array(1);

  crypto.getRandomValues(randomValues);

  return randomValues[0] % max;
}

function generatePassword(length, options) {
  let characters = "";
  let password = "";

  if (options.uppercase) {
    characters += uppercase;
  }

  if (options.lowercase) {
    characters += lowercase;
  }

  if (options.numbers) {
    characters += numbers;
  }

  if (options.symbols) {
    characters += symbols;
  }

  if (length === 0 || characters.length === 0) {
    return "";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomIndex(characters.length);

    password += characters[randomIndex];
  }

  return password;
}

export default generatePassword;
