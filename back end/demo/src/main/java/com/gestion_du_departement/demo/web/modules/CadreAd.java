package com.gestion_du_departement.demo.web.modules;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
@Entity
public class CadreAd {

  


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nom;
    private String prenom;
    private String fonction;
    private String cin;
    private String mail;
    private String adresse;
    private String phoneNumber;
    
    
}