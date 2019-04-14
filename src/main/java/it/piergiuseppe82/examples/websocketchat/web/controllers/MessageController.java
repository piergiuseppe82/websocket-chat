package it.piergiuseppe82.examples.websocketchat.web.controllers;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import it.piergiuseppe82.examples.websocketchat.model.Message;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;


@Controller
public class MessageController {
      @MessageMapping("/{id}/message")
      @SendTo("/rooms/{id}/messages")
      public Message greeting(@DestinationVariable String id, Message message) throws Exception {
          System.out.println(id);
          return message;
      }

}
