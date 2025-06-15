CREATE TABLE partnerships (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    website VARCHAR(255),
    country VARCHAR(100),
    partnership_type TEXT, -- Comma-separated list of selected types
    other_partnership_type VARCHAR(255), -- If "Other" is specified
    business_description TEXT,
    industry VARCHAR(255),
    years_in_industry VARCHAR(255),
    collaboration_type TEXT,
    mutual_benefit TEXT,
    comments TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
