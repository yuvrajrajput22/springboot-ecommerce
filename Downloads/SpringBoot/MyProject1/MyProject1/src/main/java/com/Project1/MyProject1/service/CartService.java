package com.Project1.MyProject1.service;

import com.Project1.MyProject1.model.Cart;
import com.Project1.MyProject1.model.Product;
import com.Project1.MyProject1.model.User;
import com.Project1.MyProject1.repository.CartRepository;
import com.Project1.MyProject1.repository.ProductRepository;
import com.Project1.MyProject1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.UnknownServiceException;
import java.util.List;

@Service
public class CartService {

    @Autowired
      UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
      CartRepository cartRepository;

    @Autowired
    ProductService productService;

    public Cart  addCart(int userId, int productId, int quantity)
    {
        //user dhundo
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User Not Found"));

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not Found"));

        Cart cart = new Cart(user,product,quantity);

        return cartRepository.save(cart);
    }

    public List<Cart> getCartByUser(int  userId)
    {
        return  cartRepository.findByUserId(userId);
    }

    public String removeCart(int cartId)
    {
        cartRepository.deleteById(cartId);
        return "Item removed from cart";

    }

}
