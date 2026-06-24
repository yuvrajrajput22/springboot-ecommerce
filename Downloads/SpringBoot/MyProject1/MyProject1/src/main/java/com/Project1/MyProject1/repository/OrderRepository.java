package com.Project1.MyProject1.repository;

import com.Project1.MyProject1.model.Order;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository {

    // user ke saare order lao
    List<Order> findByUserId(int userId);
}
