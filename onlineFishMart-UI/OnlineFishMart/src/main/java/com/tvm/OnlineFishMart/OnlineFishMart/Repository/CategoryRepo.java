package com.tvm.OnlineFishMart.OnlineFishMart.Repository;

import org.springframework.core.io.Resource;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import com.tvm.OnlineFishMart.OnlineFishMart.Model.Category;

public interface CategoryRepo extends JpaRepository<Category, Long>{

}
