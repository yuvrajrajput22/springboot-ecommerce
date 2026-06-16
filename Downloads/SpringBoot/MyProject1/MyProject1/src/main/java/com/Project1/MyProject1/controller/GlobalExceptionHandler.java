package com.Project1.MyProject1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
// 👆 Spring ko bataya — "Ye class SAARI controllers ki exceptions handle karegi"
// Matlab ek hi jagah se sab errors manage honge!

public class GlobalExceptionHandler {

    // ─────────────────────────────────────────
    // Jab ProductNotFoundException aaye — ye method chalega
    // ─────────────────────────────────────────
    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleProductNotFound(
            ProductNotFoundException ex) {

        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("message", ex.getMessage());      // "Product not found with id: 999"
        response.put("status", HttpStatus.NOT_FOUND.value()); // 404

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        // 👆 404 status code ke saath response bhejo
    }

    // ─────────────────────────────────────────
    // Koi bhi aur unexpected error aaye — ye method chalega
    // (safety net — sab kuch yahan catch ho jaayega)
    // ─────────────────────────────────────────
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGenericException(
            Exception ex) {

        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("message", "Something went wrong: " + ex.getMessage());
        response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value()); // 500

        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}