import { useFormik } from "formik";
import _ from "lodash";
import { useState } from "react";
import { Icon } from "@/assets/icons";
import { HighlightText } from "@/components/shared/highlight-text";
import { Section } from "@/components/shared/section";
import { useHttp } from "@/hooks/use-http";
import { useI18n } from "@/hooks/use-i18n";
import { useToast } from "@/hooks/use-toast";
import {
  type ContactFormSchema,
  contactFormSchema,
} from "@/schemas/contact-form-schema";
import { Field } from "../shared/field";

export const ContactSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="flex justify-center py-48 px-4 text-zinc-50"
    >
      <div className="w-300 flex gap-12 max-s-1080:flex-col">
        <Section.Title className="flex flex-col flex-1 gap-2 text-5xl w-full max-s-1080:text-center">
          <strong className="font-semibold">
            {t("did_you_like_what_you_saw")}
          </strong>
          <HighlightText className="w-fit max-s-1080:w-full">
            {t("get_in_touch")}
          </HighlightText>
        </Section.Title>
        <ContactForm />
      </div>
    </section>
  );
};

const ContactForm = () => {
  const toast = useToast();

  const { t } = useI18n();
  const { request } = useHttp();

  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSendEmail = async (body: ContactFormSchema) => {
    setIsSendingEmail(true);

    await request("POST", "/contact", {
      body,
      onSuccess: () => {
        toast.success(t("send_email_success"));

        setIsFormSubmitted(true);

        formik.resetForm();
      },
      onError: () => {
        toast.error(t("send_email_error"));
      },
    });

    setIsSendingEmail(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: handleSendEmail,
  });

  return (
    <>
      {isFormSubmitted ? (
        <div className="h-[496px] flex flex-col justify-center text-center gap-2 flex-1 animate-fade-in">
          <strong className="text-3xl bg-clip-text text-transparent bg-linear-to-b from-indigo-500 to-purple-500 max-s-480:text-2xl">
            {t("send_email_feedback_title")}
          </strong>
          <p className="text-xl max-s-480:text-base">
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
          <Field.Button type="submit" className="flex justify-center gap-2">
            {isSendingEmail ? (
              <>
                <Icon.Spinner className="animate-spin" />
                <span>{t("sending")}...</span>
              </>
            ) : (
              t("submit")
            )}
          </Field.Button>
        </form>
      )}
    </>
  );
};
