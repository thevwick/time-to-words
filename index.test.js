const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  describe("Handles midnight, midday", () => {
    it("Handles midnight", () => {
      const timeInWords = convertTimeToWords("0:00");
      expect(timeInWords).toBe("midnight");
    });

    it("Handles midday", () => {
      const timeInWords = convertTimeToWords("12:00");
      expect(timeInWords).toBe("midday");
    });
  });

  describe("Handles 30", () => {
    it("0:30", () => {
      const timeInWords = convertTimeToWords("0:30");
      expect(timeInWords).toBe("half past midnight");
    });

    it("9:30", () => {
      const timeInWords = convertTimeToWords("9:30");
      expect(timeInWords).toBe("half past nine");
    });

    it("12:30", () => {
      const timeInWords = convertTimeToWords("12:30");
      expect(timeInWords).toBe("half past midday");
    });
  });

  describe("Handles 00", () => {
    it("Handles 00 - 11:00", () => {
      const timeInWords = convertTimeToWords("11:00");
      expect(timeInWords).toBe("eleven o'clock");
    });

    it("Handles 00 - 8:00", () => {
      const timeInWords = convertTimeToWords("8:00");
      expect(timeInWords).toBe("eight o'clock");
    });

    it("Handles 00 - 1:00", () => {
      const timeInWords = convertTimeToWords("1:00");
      expect(timeInWords).toBe("one o'clock");
    });
  });

  describe("Handles 45", () => {
    it("0:45", () => {
      const timeInWords = convertTimeToWords("0:45");
      expect(timeInWords).toBe("quarter to one");
    });

    it("2:45", () => {
      const timeInWords = convertTimeToWords("2:45");
      expect(timeInWords).toBe("quarter to three");
    });

    it("12:45", () => {
      const timeInWords = convertTimeToWords("12:45");
      expect(timeInWords).toBe("quarter to one");
    });
  });

  describe("Handles 15", () => {
    it("0:15", () => {
      const timeInWords = convertTimeToWords("0:15");
      expect(timeInWords).toBe("quarter past midnight");
    });

    it("2:15", () => {
      const timeInWords = convertTimeToWords("2:15");
      expect(timeInWords).toBe("quarter past two");
    });

    it("12:15", () => {
      const timeInWords = convertTimeToWords("12:15");
      expect(timeInWords).toBe("quarter past midday");
    });
  });

  describe("Handles odd minutes before 30", () => {
    it("0:03", () => {
      const timeInWords = convertTimeToWords("0:03");
      expect(timeInWords).toBe("three past midnight");
    });
    it("2:03", () => {
      const timeInWords = convertTimeToWords("2:03");
      expect(timeInWords).toBe("three past two");
    });
    it("12:03", () => {
      const timeInWords = convertTimeToWords("12:03");
      expect(timeInWords).toBe("three past midday");
    });
  });

  describe("Handles odd minutes past 30", () => {
    it("0:33", () => {
      const timeInWords = convertTimeToWords("0:33");
      expect(timeInWords).toBe("twenty seven to one");
    });

    // it("2:03", () => {
    //   const timeInWords = convertTimeToWords("2:03");
    //   expect(timeInWords).toBe("three past two");
    // });

    // it("12:03", () => {
    //   const timeInWords = convertTimeToWords("12:03");
    //   expect(timeInWords).toBe("three past midday");
    // });
  });
});
