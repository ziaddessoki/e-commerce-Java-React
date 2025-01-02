/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Product {

    private int productId;
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
