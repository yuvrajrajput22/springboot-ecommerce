package com.Project1.MyProject1.model;

import jakarta.persistence.*;
import org.springframework.data.repository.cdi.Eager;

@Entity
@Table(name="Cart")
public class Cart {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   //har Cart item ka unique number
    // jaise recipt number

    @ManyToOne
    @JoinColumn(name ="user_id")
   private User user;
    //cheak krega kon login  hei  user

    @ManyToOne
    @JoinColumn(name="product_id")
        private Product product;

    private int quantity;


}
