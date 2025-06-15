CREATE TABLE investors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    country VARCHAR(100),
    linkedin VARCHAR(255),
    investor_type TEXT, -- Comma-separated list of selected types
    other_investor_type VARCHAR(255), -- If "Other" is specified
    amount DECIMAL(15,2) DEFAULT NULL,
    stage VARCHAR(100),
    industry VARCHAR(255),
    referral VARCHAR(255),
    comments TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
