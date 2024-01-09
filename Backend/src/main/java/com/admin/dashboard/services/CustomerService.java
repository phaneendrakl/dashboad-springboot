package com.admin.dashboard.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.dashboard.entities.Customer;
import com.admin.dashboard.repo.CustomerRepository;



@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;


    public Long countTotalCustomers() {
        return customerRepository.countTotalCustomers();
    }
    
    public int countBasicProducts() {
        List<Customer> customers = customerRepository.findAll();

        int basicCount = 0;

        for (Customer customer : customers) {
            if ("basic".equalsIgnoreCase(customer.getProduct()) || "both".equalsIgnoreCase(customer.getProduct())) {
                basicCount++;
            }
        }

        return basicCount;
    }
    
    public int countAdvanceProducts() {
        List<Customer> customers = customerRepository.findAll();
        int advanceCount = 0;

        for (Customer customer : customers) {
            if ("advance".equalsIgnoreCase(customer.getProduct()) || "both".equalsIgnoreCase(customer.getProduct())) {
                advanceCount++;
            }
        }

        return advanceCount;
    }
    
    
    public List<Object[]> countProductsSoldByYear() {
        return customerRepository.countProductsSoldByYear();
    }
}
