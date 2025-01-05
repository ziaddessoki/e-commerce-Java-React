/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce.ecommerceApp.exceptions.ProductNotFoundException;
import com.ecommerce.ecommerceApp.model.Product;
import com.ecommerce.ecommerceApp.repository.ProductRepository;

/**
 *
 * @author zeemo
 */
@Service
public class ProductServices {

    List<Product> products = new ArrayList<>(Arrays.asList(
            new Product(1, "Laptop", "10000"),
            new Product(2, "Mobile", "5000"),
            new Product(3, "Tablet", "3000")
    ));

    public final ProductRepository productRepository;

    public ProductServices(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Iterable<Product> getAllProducts() {
        // return products;
        Iterable<Product> productsh2 = productRepository.findAll();
        System.out.println(productsh2);
        return productsh2;
    }

    public Product getProductById(int id) {
        return products.stream().filter(p -> p.getProductId() == id).findFirst().orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));
    }

    public Product addProduct(Product product) {
        product.setProductId(products.size() + 1);
        System.out.println("Product added: " + product);
        products.add(product);
        return product;
    }

    public Product updateProduct(Product product) {
        Product existingProduct = getProductById(product.getProductId());
        if (existingProduct == null) {
            throw new ProductNotFoundException("Product with ID " + product.getProductId() + " not found");
        }
        existingProduct.setProductName(product.getProductName());
        existingProduct.setPrice(product.getPrice());
        return existingProduct;
    }

    public void deleteProd(int id) {
        boolean removed = products.removeIf(p -> p.getProductId() == id);
        if (!removed) {
            throw new ProductNotFoundException("Product with ID " + id + " not found");
        }
    }
}
