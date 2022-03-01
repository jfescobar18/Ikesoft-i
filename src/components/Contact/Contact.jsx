import React from "react";
import "./styles.scss";
import { useForm } from "react-hook-form";
import MainButton from "../MainButton";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <React.Fragment>
      <div className="contact-container">
        <h1>Contacto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <label htmlFor="name">
              Nombre*
              <input
                className=""
                type="text"
                name="name"
                {...register("name")}
              />
            </label>
            <label htmlFor="email">
              Correo electrónico*
              <input
                className=""
                type="email"
                name="email"
                {...register("email")}
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="phone">
              Teléfono
              <input
                className=""
                type="tel"
                name="phone"
                {...register("phone")}
              />
            </label>
            <label htmlFor="message">
              Mensaje
              <textarea
                className=""
                name="message"
                {...register("message")}
              ></textarea>
            </label>
          </div>
          <div className="button-container">
            <MainButton type={"submit"} onClick={() => {}} text={"Envar"} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
