<?php
session_start();
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Database connection
require './config.php';

// Get form data (sanitize as needed)
$name = $_POST['full_name'] ?? '';
$company = $_POST['company_name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$website = $_POST['website'] ?? '';
$country = $_POST['country'] ?? '';
$partnershipTypes = $_POST['partnership_type'] ?? [];
$otherPartnership = trim($_POST['other_partnership_type'] ?? '');
$businessDescription = $_POST['business_description'] ?? '';
$industry = $_POST['industry'] ?? '';
$industryYears = $_POST['years_in_industry'] ?? '';
$collaborationType = $_POST['collaboration_type'] ?? '';
$mutualBenefit = $_POST['mutual_benefit'] ?? '';
$comments = $_POST['comments'] ?? '';
$consent1 = $_POST['consent1'] ?? '';
$consent2 = $_POST['consent2'] ?? '';

// Format investor type
$partnershipTypeStr = implode(', ', $partnershipTypes);
if (in_array('Other', $partnershipTypes) && $otherPartnership !== '') {
    $partnershipTypeStr .= ' (Other: ' . $otherPartnership . ')';
}

// Save to database
$stmt = $pdo->prepare("INSERT INTO partnerships 
(full_name, company_name, email, phone, website, country, partnership_type, other_partnership_type, business_description, industry, years_in_industry, collaboration_type, mutual_benefit, comments)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->execute([
    $name,
    $company,
    $email,
    $phone,
    $website,
    $country,
    $partnershipTypeStr,
    $otherPartnership,
    $businessDescription,
    $industry,
    $industryYears,
    $collaborationType,
    $mutualBenefit,
    $comments
]);

// Send email to admin
$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'mail.dreamlenxenterprise.com.ng';
    $mail->SMTPAuth = true;
    $mail->Username = 'submissions@dreamlenxenterprise.com.ng';
    $mail->Password = 'dT.71hFx=#Kr';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('submissions@dreamlenxenterprise.com.ng', 'Lifi Infinity Ltd');
    $mail->addAddress('blessing.oyediran@outlook.com', 'Admin');

    // Validate reply-to email before setting
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $name);
    } else {
        $mail->addReplyTo('noreply@lifinfinity.com', 'No Reply'); // Fallback
    }

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'New Partnership Submission';

    $mail->Body = "
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <style>body { font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333; }
      .container { max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #ddd;
        border-radius: 10px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
      .header { text-align: center; padding-bottom: 20px; border-bottom: 3px solid #e28225; }
      .logo { max-width: 150px; margin-bottom: 10px; }
      h3 { color: #9c3d7d; margin-top: 10px; }
      .info p { font-size: 15px; margin: 8px 0; line-height: 1.6; }
      .info strong { color: #9c3d7d; }
      .footer { margin-top: 30px; text-align: center; font-size: 13px; color: #888; border-top: 1px solid #eee; padding-top: 15px; }
      </style>
    </head>
    <body>
    <div class='container'>
        <div class='header'>
            <img src='https://lifinfinity.com/assets/images/logo.svg' class='logo'>
            <h3>New Investor Information</h3>
        </div>
       <div class='info'>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Company:</strong> {$company}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Website:</strong> {$website}</p>
        <p><strong>Country:</strong> {$country}</p>
        <p><strong>Partnership Type: </strong> {$partnershipTypeStr}</p>
        <p><strong>Other Partnership Type:</strong> {$otherPartnership}</p>
        <p><strong>Business Description:</strong> {$businessDescription}</p>
        <p><strong>Industry:</strong> {$industry}</p>
        <p><strong>Years in Industry:</strong> {$industryYears}</p>
        <p><strong>Type of Collaboration:</strong> {$collaborationType}</p>
        <p><strong>Mutual Benefit:</strong> {$mutualBenefit}</p>
        <p><strong>Comments:</strong> {$comments}</p>
    </div>

        <div class='footer'>&copy; " . date("Y") . " Lifi Infinity Ltd. All rights reserved.</div>
    </div>
    </body>
    </html>";

    $mail->send();

    // Auto-response to user
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $auto = new PHPMailer(true);
        $auto->isSMTP();
        $auto->Host = 'mail.dreamlenxenterprise.com.ng';
        $auto->SMTPAuth = true;
        $auto->Username = 'submissions@dreamlenxenterprise.com.ng';
        $auto->Password = 'dT.71hFx=#Kr';
        $auto->SMTPSecure = 'ssl';
        $auto->Port = 465;

        $auto->setFrom('submissions@dreamlenxenterprise.com.ng', 'Lifi Infinity Ltd');
        $auto->addAddress($email, $name);
        $auto->isHTML(true);
        $auto->Subject = 'We Received Your Submission';
        // Validate reply-to email before setting
        if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $auto->addReplyTo('blessing.oyediran@outlook.com');
        } else {
            $auto->addReplyTo('noreply@lifinfinity.com', 'No Reply'); // Fallback
        }

        $auto->Body = "
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <style>
            body { background-color: #f7f7f7; font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px;
              padding: 25px 20px; border: 1px solid #ddd; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
            .header { text-align: center; padding-bottom: 20px; border-bottom: 3px solid #e28225; }
            .logo { max-width: 140px; margin-bottom: 10px; }
            .content p { font-size: 16px; line-height: 1.6; margin-bottom: 15px; }
            .content strong { color: #9c3d7d; }
            .footer { margin-top: 30px; font-size: 13px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 15px; }
          </style>
        </head>
        <body>
        <div class='container'>
            <div class='header'>
                <img src='https://lifinfinity.com/assets/images/logo.svg' class='logo'>
            </div>
            <div class='content'>
                <p>Dear {$name},</p>
                <p>Thank you for expressing your interest in Partnering with <strong>Lifi Infinity Ltd</strong>.</p>
                <p>We have received your submission and one of our team members will get back to you shortly regarding the next steps.</p>
                <p>Warm regards,<br><strong>Lifi Infinity Ltd Team</strong></p>
            </div>
            <div class='footer'>&copy; " . date("Y") . " Lifi Infinity Ltd. All rights reserved.</div>
        </div>
        </body>
        </html>";

        $auto->send();
    }

    $_SESSION['form_status'] = [
        'type' => 'success',
        'message' => 'Thank you! Your submission has been received. We’ll get back to you soon.'
    ];
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit();
} catch (Exception $e) {
    $_SESSION['form_status'] = [
        'type' => 'error',
        'message' => 'Oops! Something went wrong. Please try again later.'
    ];
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit();
}
