package com.admin.dashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.dashboard.entities.Customer;
import com.admin.dashboard.entities.Inventory;
import com.admin.dashboard.repo.CustomerRepository;
import com.admin.dashboard.repo.InventoryRepository;
import com.admin.dashboard.services.CustomerService;
import com.admin.dashboard.services.InventoryService;




@RestController
@RequestMapping("/api") 

@CrossOrigin(origins = "http://localhost:5173") 

public class Controller {

	// Customer API
    @Autowired
    CustomerRepository customerRepository;
    
    @PostMapping("/send-customer")
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
    	return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.OK);
    }
    @GetMapping("/get-customer")
    public ResponseEntity<List<Customer>> getCustomers() {
        List<Customer> customers = customerRepository.findAll();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }
    
    // Inventory API
    @Autowired
    InventoryRepository inventoryRepository;
    
    @PostMapping("/send-inventory")
    public ResponseEntity<Inventory> saveInventory(@RequestBody Inventory inventory){
    	return new ResponseEntity<>(inventoryRepository.save(inventory), HttpStatus.OK);
    }
    @GetMapping("/get-inventory")
    public ResponseEntity<List<Inventory>> getInventory() {
        List<Inventory> inventory = inventoryRepository.findAll();
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }
    
    
    // Inventory Count API
    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/countReady")
    public int countReadyProducts() {
        int count = inventoryService.countReadyProducts();
        return count;
    }

    @GetMapping("/countAssembling")
    public int countAssemblingProducts() {
        int count = inventoryService.countAssemblingProducts();
        return count;
    }
    
    // Products Count API && Customers Count API
    @Autowired
    private CustomerService customerService;
    
    @GetMapping("/countBasic")
    public int countBasicProducts() {
        int count = customerService.countBasicProducts();
        return count;
    }

    @GetMapping("/countAdvance")
    public int countAdvanceProducts() {
        int count = customerService.countAdvanceProducts();
        return count;
    }

    @GetMapping("/countCustomers")
    public Long countTotalCustomers() {
    	Long count = customerService.countTotalCustomers();
        return count;
    }
    
    
    @GetMapping("/yearlySold")
    public List<Object[]> countProductsSoldByYear() {
        return customerService.countProductsSoldByYear();
    }

}
