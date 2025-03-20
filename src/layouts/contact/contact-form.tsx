import { api } from "@/api";
import { Field } from "@/composables/field";
import { useI18n } from "@/hooks/use-i18n";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import _ from "lodash";
import { type ReactElement, useState } from "react";
import { type Id, toast } from "react-toastify";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("required_field")
    .max(64, "max_64_characters"),

  email: yup
    .string()
    .trim()
    .required("required_field")
    .email("email_must_be_valid")
    .max(64, "max_64_characters"),

  message: yup
    .string()
    .trim()
    .required("required_field")
    .max(1024, "max_1024_characters"),
});

export const ContactForm = (): ReactElement => {
  const { t } = useI18n();

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSendEmail = async (data: {
    name: string;
    email: string;
    message: string;
  }): Promise<void> => {
    const toastId = toast.loading(t("sending_email"));

    try {
      const response = await api.post("/contact", data);

      if (response.status === 200) {
        showSuccessToast(toastId);
        setIsFormSubmitted(true);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.status === 429) {
        showTooManyRequestsErrorToast(toastId);

        return;
      }

      showUnknownErrorToast(toastId);
    }
  };

  const showSuccessToast = (toastId: Id): void => {
    toast.update(toastId, {
      type: "success",
      render: t("send_email_success"),
      isLoading: false,
      autoClose: 3000,
    });
  };

  const showTooManyRequestsErrorToast = (toastId: Id): void => {
    toast.update(toastId, {
      type: "error",
      render: t("send_too_many_emails_error"),
      isLoading: false,
      autoClose: 3000,
    });
  };

  const showUnknownErrorToast = (toastId: Id): void => {
    toast.update(toastId, {
      type: "error",
      render: t("send_email_error"),
      isLoading: false,
      autoClose: 3000,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: handleSendEmail,
  });

  return (
    <>
      {isFormSubmitted ? (
        <div className="h-[496px] flex flex-col justify-center text-center gap-2 flex-1 animate-fade-in">
          <strong className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 max-mobile-l:text-2xl">
            {t("send_email_feedback_title")}
          </strong>
          <p className="text-xl max-mobile-l:text-base">
            {t("send_email_feedback_description")}
          </p>
        </div>
      ) : (
        <form
          className="flex flex-col flex-1 gap-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-4">
            <Field.Root
              hasErrors={!!formik.errors.name}
              isTouched={formik.touched.name}
            >
              <Field.Label>{_.capitalize(t("name"))}*</Field.Label>
              <Field.Input
                name="name"
                placeholder={`${t("your")} ${t("name")}`}
                onChange={formik.handleChange}
              />
              <Field.ErrorMessage>{formik.errors.name}</Field.ErrorMessage>
            </Field.Root>
            <Field.Root
              hasErrors={!!formik.errors.email}
              isTouched={formik.touched.email}
            >
              <Field.Label>{_.capitalize(t("email"))}*</Field.Label>
              <Field.Input
                name="email"
                placeholder={`${t("your")} ${t("email")}`}
                onChange={formik.handleChange}
              />
              <Field.ErrorMessage>{formik.errors.email}</Field.ErrorMessage>
            </Field.Root>
            <Field.Root
              hasErrors={!!formik.errors.message}
              isTouched={formik.touched.message}
            >
              <Field.Label>{_.capitalize(t("message"))}*</Field.Label>
              <Field.TextArea
                name="message"
                placeholder={`${t("your")} ${t("message")}`}
                onChange={formik.handleChange}
              />
              <Field.ErrorMessage>{formik.errors.message}</Field.ErrorMessage>
            </Field.Root>
          </div>
          <Field.Button type="submit">{t("submit")}</Field.Button>
        </form>
      )}
    </>
  );
};
