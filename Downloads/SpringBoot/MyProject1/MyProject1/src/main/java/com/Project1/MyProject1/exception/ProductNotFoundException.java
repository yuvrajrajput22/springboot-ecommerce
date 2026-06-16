package com.Project1.MyProject1.exception;

// RuntimeException extend kiya — ye ek special Exception hai
public class ProductNotFoundException extends RuntimeException {

    // Constructor — jab exception throw karenge, message dena hoga
    public ProductNotFoundException(String message) {
        super(message); // parent class ko message bhej diya
    }
}