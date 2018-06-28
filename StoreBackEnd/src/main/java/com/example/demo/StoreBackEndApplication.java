package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.entity.Product;
import com.example.demo.repositories.ProductRepository;

@SpringBootApplication
public class StoreBackEndApplication implements CommandLineRunner{

	@Autowired
	private ProductRepository proRe;
	
	public static void main(String[] args) {
		SpringApplication.run(StoreBackEndApplication.class, args);
	}
	
	public void run(String... args) throws Exception{
		proRe.save(new Product(10000.00, "Martillo"));
		proRe.save(new Product(2000.00, "Destornillador"));
		proRe.save(new Product(50000.00, "Alicate"));
		proRe.save(new Product(60000.00, "Hacha"));
		proRe.save(new Product(50000.00, "Oz"));
	}
}
