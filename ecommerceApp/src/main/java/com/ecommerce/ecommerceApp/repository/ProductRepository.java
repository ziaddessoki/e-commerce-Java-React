/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.repository;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.ecommerceApp.model.Product;

/**
 *
 * @author zeemo
 */
public interface ProductRepository extends CrudRepository<Product, Integer> {

}
