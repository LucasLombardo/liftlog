import { formatDate } from "../formatDate";

const DATE = "Tue Mar 28 2023 16:31:34 GMT-0400 (Eastern Daylight Time)";

describe("formatDate", () => {
  it("formats a short date", () => {
    const date = new Date(DATE);
    expect(formatDate(date, { lang: "en", type: "short" })).toBe("3/28/2023");
  });

  it("formats a short spanish date", () => {
    const date = new Date(DATE);
    expect(formatDate(date, { lang: "es", type: "short" })).toBe("28/3/2023");
  });

  it("formats a long date", () => {
    const date = new Date(DATE);
    expect(formatDate(date, { lang: "en", type: "long" })).toBe(
      "March 28, 2023"
    );
  });

  it("formats a long spanish date", () => {
    const date = new Date(DATE);
    expect(formatDate(date, { lang: "es", type: "long" })).toBe(
      "28 de marzo de 2023"
    );
  });

  it("given no options, will format as a short english date", () => {
    const date = new Date(DATE);
    expect(formatDate(date)).toBe("3/28/2023");
  });
});
