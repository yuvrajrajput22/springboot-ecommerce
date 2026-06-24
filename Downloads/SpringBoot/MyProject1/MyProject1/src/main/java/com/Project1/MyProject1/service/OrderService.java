package com.Project1.MyProject1.service;

import com.Project1.MyProject1.model.Order;
import com.Project1.MyProject1.model.Product;
import com.Project1.MyProject1.model.User;
import com.Project1.MyProject1.repository.OrderRepository;
import com.Project1.MyProject1.repository.ProductRepository;
import com.Project1.MyProject1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    // Order place karo
    public Order placeOrder(int userId, int productId, int quantity) {

        // User dhundho
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Product dhundho
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Total price calculate karo
        double totalPrice = product.getPrice() * quantity;

        // Naya order banao
        Order order = new Order(user, product, quantity, totalPrice);

        // Database mein save karo
        return orderRepository.save(order);
    }

    // User ke sab orders dekho
    public List<Order> getOrdersByUser(int userId) {
        return orderRepository.findByUserId(userId);
    }

    // Order status update karo
    public Order updateStatus(int orderId, String status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        return orderRepository.save(order);
    }
}