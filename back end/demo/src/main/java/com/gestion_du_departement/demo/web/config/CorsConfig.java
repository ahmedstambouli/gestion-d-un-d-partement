package com.gestion_du_departement.demo.web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allow all paths
                .allowedOrigins("hsttp://localhost:4200") // Specify your frontend origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Specify the HTTP methods you want to allow
                .allowedHeaders("*"); // Allow all headers
    }
}
