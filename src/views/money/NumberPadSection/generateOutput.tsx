type TButton =
  | "OK"
  | "Del"
  | "Clear"
  | "."
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
const generateOutput = (text: TButton, output = "0") => {
  if (text === null) {
    return "0";
  }
  switch (text) {
    case "Del":
      return output.slice(0, -1) || "0";
    case "Clear":
      return "0";
    case ".":
      if (output.includes(".")) {
        return output;
      }
      return output + text;
    default:
      return output === "0" ? text : output + text;
  }
};

export { generateOutput };
export type { TButton };
