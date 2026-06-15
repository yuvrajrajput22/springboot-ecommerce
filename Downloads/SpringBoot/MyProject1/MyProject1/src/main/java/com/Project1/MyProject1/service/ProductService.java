package com.Project1.MyProject1.service;

import com.Project1.MyProject1.model.Product;
import com.Project1.MyProject1.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Sab products lao
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }


    public Product getProductById(int id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Delete product
    public String deleteProduct(int id) {
        productRepository.deleteById(id);
        return "Product deleted!";
    }
}