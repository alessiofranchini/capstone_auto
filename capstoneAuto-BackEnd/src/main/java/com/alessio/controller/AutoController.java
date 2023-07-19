package com.alessio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alessio.entity.Auto;
import com.alessio.service.AutoService;

@RestController
@RequestMapping("/auto")
public class AutoController {
    

    @Autowired AutoService autoService;


    @PostMapping()
    public ResponseEntity<Auto> salvaAuto(@RequestBody Auto c){
        return new ResponseEntity<Auto>(autoService.salvaAuto(c), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Auto>> cercaTutteAuto(){
        return new ResponseEntity<List<Auto>>(autoService.cercaTutteAuto(), HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Auto> cercaAuto(@PathVariable Long id){
        return new ResponseEntity<Auto>(autoService.cercaAutoConId(id)
,    HttpStatus.OK);
    }
}
