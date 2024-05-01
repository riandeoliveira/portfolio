import { yup } from "@/extensions/yup-extension";
import emailJs from "@emailjs/browser";
import { useFormik } from "formik";
import { type ReactElement } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { TextArea } from "./text-area";

const contactSchema = yup.object({
  name: yup.string().trim().required("Campo obrigatório!"),

  email: yup.string().trim().required("Campo obrigatório!").validEmail("O e-mail deve ser válido!"),

  message: yup.string().trim().required("Campo obrigatório!"),
});

export const ContactSection = (): ReactElement => {
  const handleSendEmail = async (event: any): Promise<void> => {
    emailJs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      event.target,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="flex justify-center bg-zinc-950 p-24">
      <div className="w-[1200px] flex gap-24">
        <p className="text-zinc-50 font-semibold text-4xl flex-1">
          Gostou do Que Viu? Então Entre em Contato!
        </p>
        <form className="flex flex-col flex-1 gap-8" onSubmit={formik.handleSubmit}>
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
