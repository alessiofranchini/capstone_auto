package com.alessio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alessio.entity.Auto;

public interface AutoRepository extends JpaRepository<Auto, Long>{
    
}
