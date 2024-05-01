import { yup } from "@/extensions/yup-extension";
import emailJs from "@emailjs/browser";
import { useFormik } from "formik";
import { FormEvent, useState, type ReactElement } from "react";
import { toast } from "react-toastify";
import { Button } from "./button";
import { Input } from "./input";
import { TextArea } from "./text-area";

// TODO: Adicionar um toast informando o envio de e-mail

const contactSchema = yup.object({
  name: yup.string().trim().required("Campo obrigatório!").max(64, "Máximo de 64 caracteres!"),

  email: yup.string().trim().required("Campo obrigatório!").validEmail("O e-mail deve ser válido!").max(64, "Máximo de 64 caracteres!"),

  message: yup.string().trim().required("Campo obrigatório!").max(1024, "Máximo de 1024 caracteres!"),
});


export const ContactSection = (): ReactElement => {
  const [formEvent, setFormEvent] = useState<FormEvent<HTMLFormElement>>()

  const handleSendEmail = async (): Promise<void> => {
    const response = emailJs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      formEvent?.target as HTMLFormElement,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    );

    toast.promise(
      response,
      {
        pending: 'Enviando e-mail...',
        success: 'E-mail enviado com sucesso!',
        error: 'Não foi possível enviar o e-mail. Tente outra forma de contato.'
      }
  )
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
    setFormEvent(event)

    formik.handleSubmit(event)
  }

  return (
    <section className="flex justify-center bg-zinc-950 p-24">
      <div className="w-[1200px] flex gap-24">
        <p className="text-zinc-50 font-semibold text-4xl flex-1">
          Gostou do Que Viu? Então Entre em Contato!
        </p>
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
