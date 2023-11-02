package com.gestion_du_departement.demo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestion_du_departement.demo.web.modules.Etudiant;

public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {
    
}