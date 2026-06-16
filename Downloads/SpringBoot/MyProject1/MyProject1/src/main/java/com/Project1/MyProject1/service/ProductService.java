package com.Project1.MyProject1.service;

import com.Project1.MyProject1.exception.ProductNotFoundException;
import com.Project1.MyProject1.model.Product;
import com.Project1.MyProject1.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    //  UPDATED — agar product nahi mila toh Exception throw karo!
    public Product getProductById(int id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(
                        "Product not found with id: " + id));
        //  agar nahi mila, null nahi — EXCEPTION throw hogi!
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public String deleteProduct(int id) {
        // Pehle check karo product exist karta hai ya nahi
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("Product not found with id: " + id);
        }
        productRepository.deleteById(id);
        return "Product deleted!";
    }
}