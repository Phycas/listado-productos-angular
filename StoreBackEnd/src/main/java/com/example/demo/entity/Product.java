package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {
	//Atributos
	@Id
	@GeneratedValue
	private Long id;
	private double precio;
	private String nombre;
	
	//Constructor
	public Product() {
		
	}
	
	public Product(double p, String n) {
		this.precio = p;
		this.nombre = n;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	
	
	
	
	
}
