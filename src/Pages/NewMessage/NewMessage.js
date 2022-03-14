import React, {useState } from "react";
import { FormGroup, FormControl} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import { useNavigate } from 'react-router-dom';
import { onError } from "../../libs/errorLib";
import "./NewMessage.css";
import { API } from "aws-amplify";

export const NewMessage = () => {
  const navigate = useNavigate();
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createMessage = (message) => {
    return API.post("messages", "/prod/messages", {
      body: {
        content,
        receiver
      }
    });
  }

  const sendEmail = () => {
    return API.post("messages", "/prod/email", {
      body:{
        content,
        receiver
      }
    })
  }

  const validateForm = () => {
    return content.length > 0;
  }

  const  handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await createMessage({ content });
      await sendEmail({content, receiver});

      navigate("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
  <div className="newMessageWrapper">
    <div className="NewMessage">
      <form onSubmit={handleSubmit}>
      <FormGroup controlId="email">
        <FormControl
            value={receiver}
            componentClass="input"
            placeholder= "Digite o e-mail do seu crush"
            onChange={e => setReceiver(e.target.value)}
            />
        </FormGroup>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            placeholder="Escreva aqui o que voce quer dizer ao seu crush"
            onChange={e => setContent(e.target.value)}
            />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
          >
          Enviar
        </LoaderButton>
      </form>
    </div>
  </div>
  );
}