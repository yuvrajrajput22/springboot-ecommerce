package com.Project1.MyProject1.controller;

import com.Project1.MyProject1.model.Product;
import com.Project1.MyProject1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productservice;

    @GetMapping
    public List<Product> getAllProducts() {
        return productservice.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable int id) {
        return productservice.getProductById(id);
    }

    @PostMapping
    public Product addProduct(@Valid @RequestBody Product product) {
        return productservice.addProduct(product);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        return productservice.deleteProduct(id);
    }
}