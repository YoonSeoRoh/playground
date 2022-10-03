import * as yup from "yup";

export const commentValidation = yup.object({
  comment: yup.string().trim().required("댓글을 입력해주세요."),
});
