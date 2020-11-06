import React from "react";

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
    formValues,
    postForm,
  } = props;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postForm(formValues);
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Contact</h2>
        <button disabled={disabled}>submit</button>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.message}</div>
          <div>{errors.subscribe}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>General information</h4>

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
            placeholder="type your name"
            maxLength="30"
          />
          {errors.name.length > 0 ? <p>{errors.name}</p> : null}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="enter your e-mail"
            maxLength="30"
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
        </label>

        <label>
          Message
          <input
            type="message"
            name="message"
            onChange={onChange}
            value={values.message}
            placeholder="Message"
            maxLength="30"
          />
        </label>
        <label>
          Subscribe
          <input
            type="checkbox"
            name="subscribe"
            onChange={onChange}
            value={values.subscribe}
          />
        </label>
      </div>
    </form>
  );
}
