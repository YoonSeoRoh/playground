import * as yup from "yup";
import { nicknameRegExp, pwdReg } from "../constants";

export const signupValidation = yup.object({
  nickname: yup
    .string()
    .trim()
    .min(2, "최소 2자 이상 입력해주세요.")
    .max(12, "최대 12자 이하를 입력해주세요.")
    .matches(nicknameRegExp, "닉네임 양식에 맞지 않습니다.")
    .required("닉네임을 입력해주세요."),
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
  passwordConfirm: yup
    .string()
    .trim()
    .oneOf(
      [yup.ref("password"), null],
      "비밀번호가 일치하지 않습니다. 다시 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
});
