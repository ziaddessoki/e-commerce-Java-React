/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerceApp.model.Product;
import com.ecommerce.ecommerceApp.services.ProductServices;

@RestController
public class ProductController {

    private final ProductServices productServices;

    public ProductController(ProductServices productServices) {
        this.productServices = productServices;
    }

    @GetMapping("/products")
    public Iterable<Product> getAll() {
        return productServices.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public Product getById(@PathVariable int id) {
        return productServices.getProductById(id);
    }

    @PostMapping("/product")
    public ResponseEntity<Product> add(@RequestBody Product product) {
        Product savedProduct = productServices.addProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @PutMapping("/product")
    public Product update(@RequestBody Product entity) {
        Product updatedProduct = productServices.updateProduct(entity);
        return updatedProduct;
    }

    @DeleteMapping("/product/{id}")
    public void delete(@PathVariable int id) {
        productServices.deleteProd(id);
    }

}
