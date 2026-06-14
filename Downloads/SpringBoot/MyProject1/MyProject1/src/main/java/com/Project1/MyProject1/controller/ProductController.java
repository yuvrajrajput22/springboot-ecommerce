package com.Project1.MyProject1.controller;

import com.Project1.MyProject1.model.Product;
import com.Project1.MyProject1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//3rd
// ye class rest API response degi
    // mtlb method jo return  krenge woh json mein convert hoga automatically
@RestController

//is class se sab  url /products se suru honge
//mtlb - /products , /products/1 , /products/delete - sab
    @RequestMapping("/products")

    public class ProductController {

    //yha spring khud Productservice ka obj inject krega
    // hum new ProductService  nhi krenge  - DI hei yei
    @Autowired
    ProductService productservice;

    @GetMapping
        public List<Product> getAllProducts()
        {
            return productservice.getAllProducts();
            //sarver pe sab products manage kro or return kro
        }

    // get/products/1
    // browser se :http://localhost:9090/products/1
    //sirf id=1 wala product hi aayega
   @GetMapping("/{id}")
   // @pathvariable - url mei jo id hai woh yja ayga
   // /products/1 => id-1
    public Product getProduct(@PathVariable int id)
   {
       return productservice.getProductById(id);

   }

   @PostMapping
    public Product addProduct(@RequestBody Product product)
   {
       //@requestbody json body ko Produuvt obj me convert kertaa hei
       // {                    =    Product object
       //   "id": 4,           =    product.id = 4
       //   "name": "Laptop"   =    product.name = "Laptop"
       // }
       return productservice.addProduct(product);
   }

   @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id){
        return productservice.deleteProduct(id);
        //ye aerver ko bolo dletw keo mag wpa aaega
   }


    }



