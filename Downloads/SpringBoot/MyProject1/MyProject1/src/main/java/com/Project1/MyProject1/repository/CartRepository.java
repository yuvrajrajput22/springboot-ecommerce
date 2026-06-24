package com.Project1.MyProject1.repository;

import com.Project1.MyProject1.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository  extends JpaRepository<Cart,Integer> {

    //user ke sare Cart items lao
    List<Cart> findByUserId(int userId);
    //jp khud samjh jaega
    // select * from Cart where user_id=?
}
