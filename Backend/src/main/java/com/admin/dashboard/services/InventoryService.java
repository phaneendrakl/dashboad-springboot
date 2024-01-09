package com.admin.dashboard.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.dashboard.entities.Inventory;
import com.admin.dashboard.repo.InventoryRepository;

@Service
public class InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    public int countReadyProducts() {
        List<Inventory> ready = inventoryRepository.findAll();

        int readyCount = 0;

        for (Inventory status : ready) {
            if ("ready".equalsIgnoreCase(status.getStatus())) {
            	readyCount++;
            }
        }
        
        return readyCount;
    }
    
    public int countAssemblingProducts() {
        List<Inventory> assembling = inventoryRepository.findAll();

        int assemblingCount = 0;

        for (Inventory status : assembling) {
            if ("assembling".equalsIgnoreCase(status.getStatus())) {
            	assemblingCount++;
            }
        }
        
        return assemblingCount;
    }
}

