package com.Project1.MyProject1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HelloController {
    @GetMapping("/ab")
    public String Hello()
    {
        return "Hello World";
    }
}
