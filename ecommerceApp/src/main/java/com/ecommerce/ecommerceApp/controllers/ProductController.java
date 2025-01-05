/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.controllers;

import java.util.List;

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
    public List<Product> getAll() {
        return productServices.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getById(@PathVariable int id) {
        return productServices.getProductById(id);
    }

    @PostMapping("/product")
    public void add(@RequestBody Product product) {

        productServices.addProduct(product);

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
