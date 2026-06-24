package com.Project1.MyProject1.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtService {

    // ye secret pass hei
    //isse token bnate hei or verify krte hei
    //jaise loker ki cahpi - ye sirf hmare pass honi chahiye
    //32+ cahr zaroori hei
     private static final String SECRET= "mySecretKey12345mySecretKey12345";

     private Key getKey(){
         return Keys.hmacShaKeyFor(SECRET.getBytes());
     }
}
