
package com.Project1.MyProject1.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// 1
@Entity

@Table(name = "products")
public class Product {
    @Id
    private int id;

    @Column(name ="name" ,nullable = false)
    private String name;

    @Column(name="price")
    private double price;

    @Column(name="catagory")
    private String category;

    public Product() {
    }
    public Product(int id, String name, double price, String category) {
        this.name=name;
        this.price=price;
        this.category=category;
    }

    // getter and setter
    public int getId() {int id=this.id;return id;}
    public void setId(int id) {this.id=id;}
    public String getName() {return name;}
    public void setName(String name) {this.name=name;}
    public double getPrice() {return price;}
    public void setPrice(double price) {this.price=price;}
    public String getCategory() {return category;}
    public void setCategory(String category) {this.category=category;}

}

