package com.Project1.MyProject1.service;

import com.Project1.MyProject1.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
//2nd
// spring ko bta dia ki- "ye bean hei apne contaioner me rakh
//spring khud iska obj bnaenge
@Service
public class ProductService {

    //ye hamari temporary database hei
    // sbhi dirf list mr data rkhenge abd me bd me

    private List<Product> products=new ArrayList<Product>();

    //constroctor - spring jab ProductSrvice ka obj bnaega
    // tab automatically chlega
    //yha kuch  samle data dala hei satrting ke lie
   public ProductService()
   {
       // yha ye products phle se dale hei test ke lie
       products.add(new Product(1,"iphone15",79999,"Mobile"));
       products.add(new Product(2,"samsung tv",20999,"TV"));
       products.add(new Product(3,"macbook10",179999,"laptop"));
       products.add(new Product(4,"onego",799,"Bag"));
   }


   //GetAll - sab products return kro
    //controller yha se sab product manage krega
   public List<Product> getAllProducts()
   {
       return products;
   }

   //id se ek product ko dhundo - for loop lga ker
   public Product getProductById(int id){
       for (Product p:products)  // ek ke product dekho
       {
           if (p.getId()== id){ // yah id match hua
               return p;       // jo match hua whi return kro
           }
       }
       return null;

   }
   // nya product add kro
     public  Product addProduct(Product product)
     {
         products.add(product);
         return product;
     }

     // Product ko delete kro
    public String deleteProduct(int id)
    {
        for (int i=0; i<products.size(); i++)
        {
            if(products.get(i).getId()== id)
            {
                products.remove(i);
            }
        }
        return "product not found";
    }





}
