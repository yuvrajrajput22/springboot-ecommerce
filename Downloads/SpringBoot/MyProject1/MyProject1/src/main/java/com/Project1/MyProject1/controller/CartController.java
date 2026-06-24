package com.Project1.MyProject1.controller;

import com.Project1.MyProject1.model.Cart;
import com.Project1.MyProject1.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    // Cart mein product add karo
    @PostMapping("/add")
    public Cart addCart(
            @RequestParam int userId,
            @RequestParam int productId,
            @RequestParam int quantity) {
        return cartService.addCart(userId, productId, quantity);
    }

    // User ka cart dekho
    @GetMapping("/{userId}")
    public List<Cart> getCart(@PathVariable int userId) {
        return cartService.getCartByUser(userId);
    }

    // Cart se item hatao
    @DeleteMapping("/remove/{cartId}")
    public String removeCart(@PathVariable int cartId) {
        return cartService.removeCart(cartId);
    }
}