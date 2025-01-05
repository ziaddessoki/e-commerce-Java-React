/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Table("PRODUCTS")
public class Product {

    @Id
    private int productId;
    @NotEmpty(message = "File name is required")
    private String productName;
    private String price;

    public Product() {
    }

    // public Product(int productId, String productName, String price) {
    //     this.productId = productId;
    //     this.productName = productName;
    //     this.price = price;
    // }
}
