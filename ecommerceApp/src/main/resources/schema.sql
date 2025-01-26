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
    id INT AUTO_INCREMENT PRIMARY KEY,                   -- Primary Key with auto-increment
    name VARCHAR(255) NOT NULL,                          -- Product name, cannot be null
    description VARCHAR(500),                            -- Optional product description
    brand VARCHAR(255),                                  -- Optional brand name
    price VARCHAR(50),                                   -- Optional price as a string
    category VARCHAR(255),                               -- Optional category
    release_date DATE,                                   -- Optional release date
    available BOOLEAN NOT NULL DEFAULT TRUE,             -- Availability status, defaults to true
    quantity INT NOT NULL DEFAULT 0 
);

-- INSERT INTO PRODUCTS.PRODUCT (product_name, price) VALUES ('Sample Product', 19.99);
-- INSERT INTO PRODUCTS.PRODUCT (name, description, brand, price, category, release_date, available, quantity)
-- VALUES 
-- ('Smartphone X', 'High-end smartphone with AI features', 'TechBrand', '999.99', 'Electronics', '2025-01-01', TRUE, 50),
-- ('Laptop Y', 'Lightweight laptop with 16GB RAM', 'CompTech', '1299.99', 'Computers', '2024-12-15', TRUE, 20),
-- ('Headphones Z', 'Wireless noise-cancelling headphones', 'SoundCorp', '199.99', 'Accessories', '2024-11-20', FALSE, 0);