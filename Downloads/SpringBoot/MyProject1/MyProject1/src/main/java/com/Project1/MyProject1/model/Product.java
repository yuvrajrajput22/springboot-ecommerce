package com.Project1.MyProject1.model;

// 1
//koii annotation nhi ye sirf ek java class hei
//jaise real life me product ka form hota hei - name ,price catagory

public class Product {

    // ye filds hei - product properties
    private int id;
    private String name;
    private double price;
    private String category;

    // controctor
    //nya object bnate wkt ye chlega
    //jese form fill kerte hei- ssab feilds ek sathe dete hei
    public Product(int id,String name, double price, String category)
    {
        this.id= id; // jo id aayi hei sue is obj ki id set kro
        this.name=name; // jo nam aaya use set kro
        this.price=price; // price set kro
        this.category=category; // catagory set kro
    }

    // Getters- data bhar nikalne ke lie
    // spring json bnate wkt imhe call krta hei automatically

    public int getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public String getCategory() { return category; }

    // Setters - data set/update krne ke lie
    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setPrice(double price) { this.price = price; }
    public void setCategory(String category) { this.category = category; }

}
