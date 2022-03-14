import React from "react"
import "./Message.css"
import { Panel } from "react-bootstrap"

export const Message = ({message}) => {
  return(
    <div>
      <Panel bsStyle="danger">
        <Panel.Heading>&#128152;</Panel.Heading>
        <Panel.Body>{message.content}</Panel.Body>
        <Panel.Footer>{"Em: " + new Date(message.createdDate).toLocaleString()}</Panel.Footer>
      </Panel>
    </div>
  )
}