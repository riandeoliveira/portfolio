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
import { Button } from "../form/button";
import { Input } from "../form/input";
import { TextArea } from "../form/text-area";
import { HighlightText } from "../highlight-text";

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

export const ContactSection = (): ReactElement => {
  const [formEvent, setFormEvent] = useState<FormEvent<HTMLFormElement>>();

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
    <section id="contact" className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex laptop-s:flex-col laptop-s:gap-12">
        <h2 className="text-zinc-50 text-5xl flex flex-col gap-2 flex-1 laptop-s:text-center tablet-s:text-3xl">
          <strong className="font-semibold">Gostou do que viu?</strong>
          <HighlightText className="w-fit laptop-s:w-full">Entre em Contato!</HighlightText>
        </h2>
        <form className="flex flex-col flex-1 gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input type="text" name="name" label="Nome*" placeholder="Seu nome" instance={formik} />
            <Input
              type="email"
              name="email"
              label="E-mail*"
              placeholder="Seu e-mail"
              instance={formik}
            />
            <TextArea
              name="message"
              label="Mensagem*"
              placeholder="Sua mensagem"
              instance={formik}
            />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </section>
  );
};
