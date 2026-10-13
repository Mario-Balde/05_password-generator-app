function calculateStrength(length, options) {
  let score = 0;

  if (length >= 8) {
    score += 1;
  }

  if (length >= 12) {
    score += 1;
  }

  if (options.uppercase) {
    score += 1;
  }

  if (options.lowercase) {
    score += 1;
  }

  if (options.numbers) {
    score += 1;
  }

  if (options.symbols) {
    score += 1;
  }

  if (score === 0) {
    return 0;
  }

  if (score === 1) {
    return 1;
  }

  if (score === 2) {
    return 2;
  }

  if (score === 3) {
    return 3;
  }

  if (score <= 5) {
    return 3;
  }

  return 4;
}

export default calculateStrength;
