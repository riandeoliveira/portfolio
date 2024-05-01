import { EMAIL_REGEX } from "@/constants/regex";
import * as yup from "yup";

declare module "yup" {
  interface StringSchema {
    validEmail(message: string): StringSchema;
  }
}

yup.addMethod(yup.string, "validEmail", function (message: string) {
  return this.matches(EMAIL_REGEX, message);
});

export { yup };
