package com.admin.dashboard.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.admin.dashboard.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{
	
	@Query("SELECT COUNT(p) FROM Customer p")
	Long countTotalCustomers();
	
	@Query("SELECT YEAR(p.date) as year, COUNT(p) as count FROM Customer p GROUP BY YEAR(p.date)")
    List<Object[]> countProductsSoldByYear();
}
