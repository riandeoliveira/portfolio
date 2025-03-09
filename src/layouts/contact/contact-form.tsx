import { Field } from "@/composables/field";
import {
  VITE_EMAIL_PUBLIC_KEY,
  VITE_EMAIL_SERVICE_ID,
  VITE_EMAIL_TEMPLATE_ID,
} from "@/constants/environment-variables";
import { yup } from "@/extensions/yup-extension";
import { useI18n } from "@/hooks/use-i18n";
import type { EmailJSResponseStatus } from "@emailjs/browser";
import emailJs from "@emailjs/browser";
import { useFormik } from "formik";
import _ from "lodash";
import type { FormEvent } from "react";
import { type ReactElement, useState } from "react";
import { toast } from "react-toastify";

export const ContactForm = (): ReactElement => {
  const { t } = useI18n();

  const [formEvent, setFormEvent] = useState<FormEvent<HTMLFormElement>>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const contactSchema = yup.object({
    name: yup
      .string()
      .trim()
      .required(t("required_field"))
      .max(64, t("max_64_characters")),

    email: yup
      .string()
      .trim()
      .required(t("required_field"))
      .validEmail(t("email_must_be_valid"))
      .max(64, t("max_64_characters")),

    message: yup
      .string()
      .trim()
      .required(t("required_field"))
      .max(1024, t("max_1024_characters")),
  });

  const handleSendEmail = async (): Promise<void> => {
    const response: Promise<EmailJSResponseStatus> = emailJs.sendForm(
      VITE_EMAIL_SERVICE_ID,
      VITE_EMAIL_TEMPLATE_ID,
      formEvent?.target as HTMLFormElement,
      VITE_EMAIL_PUBLIC_KEY,
    );

    toast.promise(response, {
      pending: "Enviando e-mail...",
      success: "E-mail enviado com sucesso!",
      error: "Não foi possível enviar o e-mail. Tente outra forma de contato.",
    });

    const emailResponse: EmailJSResponseStatus = await response;

    if (emailResponse.status === 200) setIsFormSubmitted(true);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    setFormEvent(event);

    formik.handleSubmit(event);
  };

  return (
    <>
      {isFormSubmitted ? (
        <div className="h-[496px] flex flex-col justify-center text-center gap-2 flex-1 animate-fade-in">
          <strong className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 mobile-l:text-2xl">
            Obrigado por entrar em contato.
          </strong>
          <p className="text-xl mobile-l:text-base">
            Recebi seu e-mail e retornarei o quanto antes!
          </p>
        </div>
      ) : (
        <form className="flex flex-col flex-1 gap-8" onSubmit={handleSubmit}>
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
