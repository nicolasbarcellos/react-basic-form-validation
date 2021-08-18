import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";

import "./Form.css";

export default function FormSignup() {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);
  console.log(errors);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            className="form-input"
            name="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-input"
            name="email"
            type="text"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-input"
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="confirm-password" className="form-label">
            Password Confirm
          </label>
          <input
            className="form-input"
            name="confirmPassword"
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}
        </div>
        <button type="submit" className="fomr-input-btn">
          Sign up
        </button>
        <span className="fomr-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
}
