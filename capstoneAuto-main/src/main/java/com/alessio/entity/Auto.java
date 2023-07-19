package com.alessio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="auto")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Auto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long id;

    @Column (nullable = false)
    private String foto;

    @Column (nullable = false)
    private String marca;

    @Column (nullable = false)
    private String modello;

    @Column (nullable = false)
    private String anno;

    @Column (nullable = false, length=1000000)
    private String informazioni;
}
