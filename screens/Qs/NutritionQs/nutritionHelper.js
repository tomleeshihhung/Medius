export const nutritionFinalCalculate = (vegetables, fruits, proteins, dairy, water) => {
const score = (vegetables + fruits + proteins + dairy + water);
const value = score / 20;
if (value <= 0.2) {
  return { value, score, status: 'Concerning' };
}
if (value > 0.2 && value <= 0.4) {
  return { value, score, status: 'Poor' };
}
if (value > 0.4 && value <= 0.6) {
  return { value, score, status: 'Good' };
}
if (value > 0.6 && value <= 0.8) {
  return { value, score, status: 'Great' };
}
if (value > 0.8 && value <= 1) {
  return { value, score, status: 'Excellent' };
}
};

export const noDairyFinalCalculate = (vegetables, fruits, proteins, water) => {
const score = (vegetables + fruits + proteins + water);
const value = score / 16;
if (value <= 0.2) {
  return { value, score, status: 'Concerning' };
}
if (value > 0.2 && value <= 0.4) {
  return { value, score, status: 'Poor' };
}
if (value > 0.4 && value <= 0.6) {
  return { value, score, status: 'Good' };
}
if (value > 0.6 && value <= 0.8) {
  return { value, score, status: 'Great' };
}
if (value > 0.8 && value <= 1) {
  return { value, score, status: 'Excellent' };
}
};

export const calculate = (a, b, c, d) => {
    if (a === 'vegetables') {
    const value = (b * c) / 7;
      if (value < 1) {
        return { value, score: 0, status: 'Concerning' };
      }
      if (value >= 1 && value < 2) {
        return { value, score: 1, status: 'Poor' };
      }
      if (value >= 2 && value < 3) {
        return { value, score: 2, status: 'Good' };
      }
      if (value >= 3 && value < 5) {
        return { value, score: 3, status: 'Great' };
      }
      if (value >= 5) {
        return { value, score: 4, status: 'Excellent' };
      }
    }

    if (a === 'fruits') {
    const value = (b * c) / 7;
      if (value < 0.5) {
        return { value, score: 1, status: 'Poor' };
      }
      if (value >= 0.5 && value < 1) {
        return { value, score: 2, status: 'Good' };
      }
      if (value >= 1 && value < 2) {
        return { value, score: 3, status: 'Great' };
      }
      if (value >= 2) {
        return { value, score: 4, status: 'Excellent' };
      }
    }
    if (a === 'proteins') {
    const value = (b * (c + d)) / 7;
      if (value < 0.5) {
        return { value, score: 0, status: 'Concerning' };
      }
      if (value >= 0.5 && value < 1) {
        return { value, score: 1, status: 'Poor' };
      }
      if (value >= 1 && value < 2) {
        return { value, score: 2, status: 'Good' };
      }
      if (value >= 2 && value < 3) {
        return { value, score: 3, status: 'Great' };
      }
      if (value >= 3) {
        return { value, score: 4, status: 'Excellent' };
      }
    }
    if (a === 'dairy') {
    const value = b;
      if (value < 2) {
        return { value, score: 1, status: 'Poor' };
      }
      if (value >= 2 && value < 4) {
        return { value, score: 2, status: 'Good' };
      }
      if (value >= 4 && value < 6) {
        return { value, score: 3, status: 'Great' };
      }
      if (value === 7) {
        return { value, score: 4, status: 'Excellent' };
      }
    }
    if (a === 'water') {
    const value = b;
      if (value < 2) {
        return { value, score: 1, status: 'Poor' };
      }
      if (value >= 2 && value < 4) {
        return { value, score: 2, status: 'Good' };
      }
      if (value >= 4 && value < 6) {
        return { value, score: 3, status: 'Great' };
      }
      if (value >= 6) {
        return { value, score: 4, status: 'Excellent' };
      }
    }
};
