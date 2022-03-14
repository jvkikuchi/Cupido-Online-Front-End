import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { Message } from "../Message/Message";
import "./Home.css";

export const Home = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const onLoad = async() => {
      if (!isAuthenticated) {
        return;
      }
  
      try {
        const messages = await getMessages();
        setMessages(messages);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);


  const getMessages = () => {
    return API.get("messages", "/prod/messages");
  }

  console.log(messages)

  const renderLander = () => {
    return (
      <div className="lander">
        <h1>Cupido Online</h1>

        <div className="heartContainer">
          <div id="pulsingheart"></div>
        </div>
        
        <p className="description">Mande mensagens anonimas para o seu crush, em um click!</p>

      </div>
    );
  }

  const renderMessages = () => {
    return (
      <div className="messages">
        <h2 className="suas-mensagens">Suas Mensagens</h2>
        {!isLoading && messages.map(message => (
            <Message message={message} />
        )
        )}
      </div>
    );
  }

  return (
    <>
    <div className="Home">
      {isAuthenticated ? renderMessages() : renderLander()}
    </div>   
    </>
  );
}

