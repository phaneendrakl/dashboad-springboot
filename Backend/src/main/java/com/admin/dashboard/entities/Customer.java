package com.admin.dashboard.entities;

import jakarta.persistence.Table;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name="customers")
public class Customer {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="customer_id")
private Long id;

@Column(name="name")
private String name;

@Column(name="product")
private String product;

@Column(name="date")
private Date date;

@Column(name="mobile")
private String mobile;


public Customer() {
	super();
}


public Customer(Long id, String name, String product, Date date, String mobile) {
	super();
	this.id = id;
	this.name = name;
	this.product = product;
	this.date = date;
	this.mobile = mobile;
}


public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getProduct() {
	return product;
}

public void setProduct(String product) {
	this.product = product;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public String getMobile() {
	return mobile;
}

public void setMobile(String mobile) {
	this.mobile = mobile;
}


@Override
public String toString() {
	return "CustomerEntity [id=" + id + ", name=" + name + ", product=" + product + ", date=" + date + ", mobile="
			+ mobile + "]";
}




}
