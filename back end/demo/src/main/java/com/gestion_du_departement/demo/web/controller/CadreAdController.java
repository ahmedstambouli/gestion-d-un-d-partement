package com.gestion_du_departement.demo.web.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.gestion_du_departement.demo.web.modules.CadreAd;
import com.gestion_du_departement.demo.web.repository.CadreAdRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cadreAdministratif")
public class CadreAdController {

    private final CadreAdRepository cadreAdRepository;

    @Autowired
    public CadreAdController(CadreAdRepository cadreAdRepository) {
        this.cadreAdRepository = cadreAdRepository;
    }

    @GetMapping("/getAll")
    public List<CadreAd> getAllCadreAdministratif() {
        return cadreAdRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<CadreAd> getCadreAdministratifById(@PathVariable Long id) {
        return cadreAdRepository.findById(id);
    }

    @PostMapping("/ajoutCadreAd")
    public CadreAd createCadreAdministratif(@RequestBody CadreAd cadreAd) {
        return cadreAdRepository.save(cadreAd);
    }

    @PutMapping("/{id}")
    public CadreAd updateCadreAdministratif(@PathVariable Long id, @RequestBody CadreAd cadreAd) {
        if (cadreAdRepository.existsById(id)) {
            cadreAd.setId(id);
            return cadreAdRepository.save(cadreAd);
        } else {
            // Handle the error, e.g., return a 404 response
            return null;
        }
    }

    @DeleteMapping("/del/{id}")
    public void deleteCadreAdministratif(@PathVariable Long id) {
        cadreAdRepository.deleteById(id);
    }
}

