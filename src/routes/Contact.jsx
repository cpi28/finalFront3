import { useContext } from "react";
import { Form } from "../components/Form";
import "../routes/Contact.modules.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Contact() {
  const { tema } = useContext(ContextGlobal);
  return (
    <article
      className="info-form"
      style={{ backgroundColor: tema.home }}
    >
      <p className="title-form">Formulario de contacto</p>
      <p className="info-p">
        Por cualquier consulta, envienos sus datos y nos contactaremos a la
        brevedad.
      </p>
      <Form />
    </article>
  );
}