package com.Project1.MyProject1.exception;

 // Runtime exc ko extend kra hei
// mtlb - hmne java ka buil exception se apna  khud ka exce bnaya hei
public class ProductNotFoundException extends RuntimeException
{
     // constructor - jb bhi ye exc throw krega
    // ek msssage dena hoga jese "Product nhi mila"
    public ProductNotFoundException(String message) {
        super(message);
        // super () ka mtllb hei parent class (RunTimeExc) ko ye msg bhej do
        // taki wo use store ker ske
    }
}