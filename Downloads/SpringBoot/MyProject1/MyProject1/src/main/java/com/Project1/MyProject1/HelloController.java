
package com.Project1.MyProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    private HelloService helloservice;

    @GetMapping("/heloo/{name}")
    public String hello(@PathVariable String name) {
        return helloservice.getGreeting(name);
    }
}