package com.gestion_du_departement.demo.web.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion_du_departement.demo.web.modules.Etudiant;
import com.gestion_du_departement.demo.web.repository.EtudiantRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/etudiant")
public class EtudiantController {

    private final EtudiantRepository etudiantRepository;

    @Autowired
    public EtudiantController(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }

    @GetMapping("/Etudiant/getAll")
    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Etudiant> getEtudiantById(@PathVariable long id) {
        return etudiantRepository.findById(id);
    }

    @PostMapping("/ajoutE")
    public Etudiant createEtudiant(@RequestBody Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @PutMapping("/ModifyEtudiant/{id}")
    public Etudiant updateEtudiant(@PathVariable long id, @RequestBody Etudiant etudiant) {
        if (etudiantRepository.existsById(id)) {
            etudiant.setId(id);
            return etudiantRepository.save(etudiant);
        } else {
            // Gérer l'erreur, par exemple, renvoyer une réponse 404
            return null;
        }
    }
    @DeleteMapping("/del/{id}")
    public void deleteEtudiant(@PathVariable long id) {
        etudiantRepository.deleteById(id);
    }  
    
    
}