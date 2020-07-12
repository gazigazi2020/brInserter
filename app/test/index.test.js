import { lineAdjust, insertAfter, checkText } from "../index.js";

describe("brInserter", () => {
  describe("lineAjust", () => {
    it("delete newLine", () => {
      expect(lineAdjust(`あかさたな\nはまやらわ`)).toBe("あかさたなはまやらわ");
    });
  });
  describe("insertAfter", () => {
    it("insert text after text", () => {
      expect(insertAfter(`あかさたな。はまやらわ`, "<br>", "。")).toBe(
        "あかさたな。<br>はまやらわ"
      );
    });
  });
  describe("checkText", () => {
    it("check Text contain いき", () => {
      expect(
        checkText("あかさたな。はまやらわ", ["あか", "いき", "はま"])
      ).toContainEqual("いき");
    });
    it("check Text not contain あか", () => {
      expect(
        checkText("あかさたな。はまやらわ", ["あか", "いき", "はま"])
      ).not.toContainEqual("あか");
    });
  });
});
