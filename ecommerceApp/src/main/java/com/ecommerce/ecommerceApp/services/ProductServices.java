/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce.ecommerceApp.model.Product;

/**
 *
 * @author zeemo
 */
@Service
public class ProductServices {

    List<Product> products = Arrays.asList(
            new Product(1, "Laptop", "10000"),
            new Product(2, "Mobile", "5000"),
            new Product(3, "Tablet", "3000")
    );

    public List<Product> getAllProducts() {
        return products;
    }

    public Product getProductById(int id) {
        return products.stream().filter(p -> p.getProductId() == id).findFirst().get();
    }
}
