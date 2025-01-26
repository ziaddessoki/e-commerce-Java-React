/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "PRODUCT", schema = "PRODUCTS")
public class Product {

    @Id
    private int id;
    @NotEmpty(message = "Product name is required")
    private String name;
    private String description;
    private String brand;
    private String price;
    private String category;
    private Date releaseDate;
    private boolean available;
    private int quantity;

    //we use @NoArgsConstructor instead of
    // public Product() {
    // }
    // we use @AllArgsConstructor instead of
    // public Product(int productId, String productName, String price) {
    //     this.productId = productId;
    //     this.productName = productName;
    //     this.price = price;
    // }
}
