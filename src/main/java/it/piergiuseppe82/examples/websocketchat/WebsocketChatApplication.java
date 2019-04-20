package it.piergiuseppe82.examples.websocketchat;

/*
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
*/
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebsocketChatApplication /* extends SpringBootServletInitializer */ {

/*************************************************************************************
Extension of SpringBootServletInitializer and Override
not required with Embedded Server.

Required for Deployable WAR.
*************************************************************************************/

	// @Override
  // protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
  //     return application.sources(WebsocketChatApplication.class);
  // }

	public static void main(String[] args) {
		SpringApplication.run(WebsocketChatApplication.class, args);
	}

}
