import {
  matchOnlyLetterSpaceOrPeriod,
  matchEmail,
  matchPhone,
  matchUrl,
} from "lib/parse-resume-from-pdf/extract-resume-from-sections/extract-profile";
import type { TextItem } from "lib/parse-resume-from-pdf/types";

const makeTextItem = (text: string) =>
  ({
    text,
  } as TextItem);

describe("extract-profile tests - ", () => {
  it("Name", () => {
    expect(
      matchOnlyLetterSpaceOrPeriod(makeTextItem("Leonardo W. DiCaprio"))![0]
    ).toBe("Leonardo W. DiCaprio");
  });

  it("Email", () => {
    expect(matchEmail(makeTextItem("  jobijump@gmail.com  "))![0]).toBe(
      "jobijump@gmail.com"
    );
  });

  it("Phone", () => {
    expect(matchPhone(makeTextItem("  +90(546)209-0872  "))![0]).toBe(
      "+90(546)209-0872"
    );
  });

  it("Url", () => {
    expect(matchUrl(makeTextItem("  linkedin.com/in/arash-banijamali  "))![0]).toBe(
      "linkedin.com/in/arash-banijamali"
    );
    expect(matchUrl(makeTextItem("jobijump@gmail.com"))).toBeFalsy();
  });
});
