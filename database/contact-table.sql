CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    contact_message TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
