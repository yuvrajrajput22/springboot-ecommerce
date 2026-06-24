package com.Project1.MyProject1.controller;

import com.Project1.MyProject1.model.Order;
import com.Project1.MyProject1.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    OrderService orderService;

    public Order placeOrder(
            @RequestParam int userId,
            @RequestParam int productId,
            @RequestParam int quantity)
    {
         return orderService.placeOrder(userId,productId,quantity);
    }

    @PutMapping("/{userId}")
    public List<Order> getOrders(@PathVariable int userId)
    {
        return orderService.getOrdersByUser(userId);
    }


    @PutMapping("{orderId}/status")
    public Order updateOrderStatus(@PathVariable int orderId, @RequestParam String status)
    {
        return orderService.updateStatus(orderId,status);
    }


}
