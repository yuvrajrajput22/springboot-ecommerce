package com.Project1.MyProject1;

import org.springframework.stereotype.Service;

@Service
public class HelloService {
    public String getGreeting(String name) {
        return "heloo duniya" +name;
    }
}

