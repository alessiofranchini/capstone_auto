package com.alessio.runner;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CapstoneRunner implements CommandLineRunner{

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Capstone runner....");
    }
    
}
