package com.admin.dashboard.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.dashboard.entities.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long>{

}
