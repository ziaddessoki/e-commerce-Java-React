/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    private static final Logger logger = LoggerFactory.getLogger(ProductServices.class);
    public final ProductRepository productRepository;

    public ProductServices(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Iterable<Product> getAllProducts() {
        Iterable<Product> productsh2 = productRepository.findAll();
        System.out.println(productsh2);
        return productsh2;
    }

    public Product getProductById(int id) {
        // return products.stream().filter(p -> p.getProductId() == id).findFirst().orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));
        return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));

    }

    public Product addProduct(Product product) {
        // product.setProductId(products.size() + 1);
        // System.out.println("Product added: " + product);
        // products.add(product);
        // return product;
        validateProduct(product);
        logger.info("Adding product: {}", product.getProductName());
        return productRepository.save(product);
    }

    @Transactional
    public Product updateProduct(Product product) {
        try {
            validateProduct(product);
            Product existingProduct = getProductById(product.getProductId());
            if (existingProduct == null) {
                throw new ProductNotFoundException("Product with ID " + product.getProductId() + " not found");
            }
            existingProduct.setProductName(product.getProductName());
            existingProduct.setPrice(product.getPrice());
            productRepository.save(existingProduct);
            return existingProduct;
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    public void deleteProd(int id) {
        boolean removed = products.removeIf(p -> p.getProductId() == id);
        if (!removed) {
            throw new ProductNotFoundException("Product with ID " + id + " not found");
        }
    }

    private void validateProduct(Product product) {
        if (product == null) {
            throw new IllegalArgumentException("Product cannot be null.");
        }
        if (product.getProductName() == null || product.getProductName().trim().isEmpty()) {
            logger.error("Product name is required and cannot be empty.");
            throw new IllegalArgumentException("Product name is required and cannot be empty.");
        }
        if (product.getPrice() == null || product.getPrice().trim().isEmpty()) {
            throw new IllegalArgumentException("Product price must be greater than zero.");
        }

        try {
            BigDecimal price = new BigDecimal(product.getPrice());
            if (price.compareTo(BigDecimal.ZERO) <= 0) {
                throw new IllegalArgumentException("Product price must be greater than zero.");
            }
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException("Product price must be a valid numeric value.");
        }
    }
}
