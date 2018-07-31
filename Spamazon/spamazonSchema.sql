DROP DATABASE IF EXISTS spamazonDB;
CREATE DATABASE spamazonDB;

USE spamazonDB;

CREATE TABLE inventoryCatalog (
	id INTEGER AUTO_INCREMENT NOT NULL,
    itemName VARCHAR(50) NOT NULL,
    department VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INTEGER(10) NOT NULL,
    productSold INTEGER(10) NOT NULL,
    totalSales DECIMAL(10,2) NOT NULL,
    overhead DECIMAL(10,2) NOT NULL,
    totalProfit DECIMAL(10,2) NOT NULL
);
