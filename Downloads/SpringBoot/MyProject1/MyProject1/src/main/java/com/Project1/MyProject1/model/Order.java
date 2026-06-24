package com.Project1.MyProject1.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name= "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user; // kisne oreder kra hei

    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;  //kya order kra hei

    private int quantity; // kitna order kra hei

    private double totalPrice;  // kitne ka order kra hei

    private String status; // order ka status
                           // "pending" ,"delliverd", "cancelled"

    private LocalDateTime date; // kab order kra

    public Order(){}

    public Order(User user, Product product, int quantity, double totalPrice) {
        this.user = user;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.status = "PENDING";
        this.date = LocalDateTime.now();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
