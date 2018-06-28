package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Product;
import com.example.demo.repositories.ProductRepository;


@RestController
public class ProductController {
	@Autowired
	private ProductRepository proRe;
	
	@GetMapping("/products")
	public List<Product> getProducts() {
		return proRe.findAll();
	}
	
	@GetMapping("/product/{id}") //puede ser null
	public Optional<Product> getProduct(@PathVariable Long id){ //puede ser null
		return proRe.findById(id);
	}
	
	@DeleteMapping("/product/delete/{id}") //puede ser null
	public void deleteProduct(@PathVariable Long id){ //puede ser null
		try {
			proRe.deleteById(id);
		} catch (Exception e) {
			System.out.println("ERROR: "  + e);
		}
	}
	
	@PostMapping("product/create")
	public Product createProduct(Product p) {
		return proRe.save(p);
	}
	
	@PutMapping("product/update")
	public Product updateProduct(Product p) {
		return proRe.save(p);
	}
}
