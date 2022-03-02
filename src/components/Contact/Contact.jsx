import React from "react";
import "./styles.scss";
import { useForm } from "react-hook-form";
import MainButton from "../MainButton";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
                className={errors?.name ? "not-valid" : ""}
                type="text"
                name="name"
                {...register("name", { required: true })}
              />
            </label>
            <label htmlFor="email">
              Correo electrónico*
              <input
                className={errors?.email ? "not-valid" : ""}
                type="email"
                name="email"
                {...register("email", { required: true })}
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
