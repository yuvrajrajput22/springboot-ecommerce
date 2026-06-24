package com.Project1.MyProject1.repository;

import com.Project1.MyProject1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<User,Integer> {

    // email se user ko dhundho - login ke wkt
    Optional<User> findByEmail(String email);
    //ya kuch kikhne ki jrurat bhi
    //jpa khud samjh jaega - select * from login

}
