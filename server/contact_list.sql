CREATE DATABASE IF NOT EXISTS contact_list;
CREATE TABLE IF NOT EXISTS contact_list.users(
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    phone VARCHAR(200),
    address VARCHAR(200),
    email VARCHAR(200)
);

INSERT INTO contact_list.users (name, phone, address, email)
VALUES ('Lushi', '6472172785', '123 Smith Street', 'lushil@ubunto.ca'),
('Weeh', '123456', 'Tofino, BC', 'ohoh@hotmail.ohoh');