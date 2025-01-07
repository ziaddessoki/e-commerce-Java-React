-- CREATE TABLE IF NOT EXISTS PRODUCTS (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(255),
--     price VARCHAR(255)
-- );


CREATE SCHEMA IF NOT EXISTS USERS;

-- Create Products schema
CREATE SCHEMA IF NOT EXISTS PRODUCTS;

-- Create tables in the Users schema
CREATE TABLE IF NOT EXISTS USERS."USER" (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255)
);

-- Create tables in the Products schema
CREATE TABLE IF NOT EXISTS PRODUCTS.PRODUCT (
    product_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255),
    price VARCHAR(255)
);

-- INSERT INTO PRODUCTS.PRODUCT (product_name, price) VALUES ('Sample Product', 19.99);