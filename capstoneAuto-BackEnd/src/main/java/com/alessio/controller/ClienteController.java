package com.alessio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alessio.entity.Cliente;
import com.alessio.service.ClienteService;

@RestController
@RequestMapping("/clienti")
public class ClienteController {
    

    @Autowired ClienteService clienteService;


    @PostMapping()
    public ResponseEntity<Cliente> salvaCliente(@RequestBody Cliente c){
        return new ResponseEntity<Cliente>(clienteService.salvaCliente(c), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Cliente>> cercaClienti(){
        return new ResponseEntity<List<Cliente>>(clienteService.cercaTuttiCliente(), HttpStatus.OK);
    }
}
