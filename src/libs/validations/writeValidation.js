import * as yup from "yup";

export const writeValidation = yup.object({
  title: yup.string().trim().required("제목을 입력해주세요."),
  content: yup.string().trim().required("내용을 입력해주세요."),
  join: yup.number().required("모집 인원을 입력해주세요."),
});
