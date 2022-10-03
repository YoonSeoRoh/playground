import * as yup from "yup";
import { pwdReg } from "../constants";

export const loginValidation = yup.object({
  email: yup
    .string()
    .email("이메일 양식에 맞지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .trim()
    .min(8, "최소 8자 이상 입력해주세요.")
    .max(20, "최대 20자 이하를 입력해주세요.")
    .matches(pwdReg, "특수문자, 영문자, 숫자를 모두 1자 이상 포함해주세요.")
    .required("비밀번호를 입력해주세요."),
});
