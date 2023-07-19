package com.alessio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alessio.entity.Auto;
import com.alessio.repository.AutoRepository;

@Service
public class AutoService {
    
    @Autowired AutoRepository autoRepository;

    public Auto salvaAuto(Auto a){
        return autoRepository.save(a);
    }

    public List<Auto> cercaTutteAuto(){
        return autoRepository.findAll();
    }
    
    public Auto cercaAutoConId(Long id){
        return autoRepository.findById(id).get();
    }
}
