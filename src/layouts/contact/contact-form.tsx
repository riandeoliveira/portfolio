import { Field } from "@/composables/field";
import {
  VITE_EMAIL_PUBLIC_KEY,
  VITE_EMAIL_SERVICE_ID,
  VITE_EMAIL_TEMPLATE_ID,
} from "@/constants/environment-variables";
import { yup } from "@/extensions/yup-extension";
import type { EmailJSResponseStatus } from "@emailjs/browser";
import emailJs from "@emailjs/browser";
import { useFormik } from "formik";
import type { FormEvent } from "react";
import { useState, type ReactElement } from "react";
import { toast } from "react-toastify";

const contactSchema = yup.object({
  name: yup.string().trim().required("Campo obrigatório!").max(64, "Máximo de 64 caracteres!"),

  email: yup
    .string()
    .trim()
    .required("Campo obrigatório!")
    .validEmail("O e-mail deve ser válido!")
    .max(64, "Máximo de 64 caracteres!"),

  message: yup
    .string()
    .trim()
    .required("Campo obrigatório!")
    .max(1024, "Máximo de 1024 caracteres!"),
});

export const ContactForm = (): ReactElement => {
  const [formEvent, setFormEvent] = useState<FormEvent<HTMLFormElement>>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

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
        <div className="h-[496px] flex flex-col justify-center text-center gap-2 flex-1 animate-fadeIn">
          <strong className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 mobile-l:text-2xl">
            Obrigado por entrar em contato.
          </strong>
          <p className="text-xl mobile-l:text-base">Recebi seu e-mail e retornarei o quanto antes!</p>
        </div>
      ) : (
        <form className="flex flex-col flex-1 gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Field.Root hasErrors={!!formik.errors.name} isTouched={formik.touched.name}>
              <Field.Label>Nome*</Field.Label>
              <Field.Input name="name" placeholder="Seu nome" onChange={formik.handleChange} />
              <Field.ErrorMessage>{formik.errors.name}</Field.ErrorMessage>
            </Field.Root>
            <Field.Root hasErrors={!!formik.errors.email} isTouched={formik.touched.email}>
              <Field.Label>E-mail*</Field.Label>
              <Field.Input name="email" placeholder="Seu e-mail" onChange={formik.handleChange} />
              <Field.ErrorMessage>{formik.errors.email}</Field.ErrorMessage>
            </Field.Root>
            <Field.Root hasErrors={!!formik.errors.message} isTouched={formik.touched.message}>
              <Field.Label>Mensagem*</Field.Label>
              <Field.TextArea
                name="message"
                placeholder="Sua mensagem"
                onChange={formik.handleChange}
              />
              <Field.ErrorMessage>{formik.errors.message}</Field.ErrorMessage>
            </Field.Root>
          </div>
          <Field.Button type="submit">Enviar</Field.Button>
        </form>
      )}
    </>
  );
};
