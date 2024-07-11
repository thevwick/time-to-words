// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hour, minutes] = time.split(":").map((timeValue) => Number(timeValue));

  const hourWords = {
    0: "midnight",
    1: "one",
    2: "two",
    3: "three",
    8: "eight",
    9: "nine",
    11: "eleven",
    12: "midday",
    13: "one",
  };

  const minuteWords = {
    3: "three",
    15: "quarter",
    27: "twenty seven",
    30: "half",
    45: "quarter",
  };

  if ((hour === 0 || hour === 12) && minutes === 0) {
    return `${hourWords[hour]}`;
  }

  if (minutes === 15) {
    return `${minuteWords[minutes]} past ${hourWords[hour]}`;
  }

  if (minutes === 45) {
    return `${minuteWords[minutes]} to ${hourWords[hour + 1]}`;
  }

  if (minutes === 30) {
    return `${minuteWords[minutes]} past ${hourWords[hour]}`;
  }

  if (minutes === 0) {
    return `${hourWords[hour]} o'clock`;
  }

  if (minutes > 30) {
    return `${minuteWords[60 - minutes]} to ${hourWords[hour + 1]}`;
  }

  return `${minuteWords[minutes]} past ${hourWords[hour]}`;
}

module.exports = { convertTimeToWords };
