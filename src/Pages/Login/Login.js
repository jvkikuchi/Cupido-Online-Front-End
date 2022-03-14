import React, { useState } from "react";
import { useNavigate, Link} from 'react-router-dom';
import { Auth } from "aws-amplify";
import { useFormFields } from "../../libs/hooksLib";
import LoaderButton from "../../components/LoaderButton";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  const  validateForm= () => {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setIsLoading(true);
    try {
      await Auth.signIn(fields.email, fields.password);
      setIsAuthenticated(true);
      navigate("/")
    } catch (err) {
      setIsLoading(false);
      onError(err);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Senha</ControlLabel>
          <FormControl
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
          />
        </FormGroup>
        <Link to="/login/reset">Esqueceu sua senha?</Link>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
  Login
</LoaderButton>
      </form>
    </div>
  );
}