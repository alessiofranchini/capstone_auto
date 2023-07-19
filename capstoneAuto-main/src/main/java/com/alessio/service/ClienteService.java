package com.alessio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alessio.entity.Cliente;
import com.alessio.repository.ClienteRepository;

@Service
public class ClienteService {
    
    @Autowired ClienteRepository clienteRepository;

    public Cliente salvaCliente(Cliente c){
        System.out.println(c.getIndirizzo());
        return clienteRepository.save(c);
    }

    public List<Cliente> cercaTuttiCliente(){
        return clienteRepository.findAll();
    }
}
