<?php
/*
 * Teranode1 — Contact form email handler
 * Uses PHP's built-in mail() function — works on Hostinger shared hosting
 * with no plugins or dependencies required.
 *
 * SETUP:
 *   1. Change $SEND_TO below to the email address where you want to
 *      receive consultation requests.
 *   2. Optionally change $SEND_FROM to a sender address on your domain.
 *   3. Upload this file alongside your HTML files to Hostinger via
 *      File Manager or FTP.
 */

// ============ CONFIGURATION ============
// Change this to YOUR email address
$SEND_TO = 'info@teranode1.com';

// Sender address — should be an email on YOUR domain (Hostinger requirement)
$SEND_FROM = 'no-reply@teranode1.com';

// Website name for email subject
$SITE_NAME = 'Teranode1';
// ========================================

header('Content-Type: application/json');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Collect and sanitize fields
$name         = trim($_POST['name'] ?? '');
$company      = trim($_POST['company'] ?? '');
$email        = trim($_POST['email'] ?? '');
$phone        = trim($_POST['phone'] ?? '');
$industry     = trim($_POST['industry'] ?? '');
$project_goals = trim($_POST['project_goals'] ?? '');
$message      = trim($_POST['message'] ?? '');

// Validate required fields
if ($name === '' || $email === '') {
    echo json_encode(['success' => false, 'message' => 'Please provide at least your name and email.']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

// Sanitize for email headers (prevent header injection)
$name_safe  = str_replace(["\r", "\n", "\t"], ' ', $name);
$email_safe = str_replace(["\r", "\n", "\t"], ' ', $email);

// Build email subject
$subject = '[' . $SITE_NAME . '] New Consultation Request from ' . $name_safe;

// Build email body
$body  = "You have received a new consultation request from your website.\n";
$body .= "==============================================\n\n";
$body .= "Name:          " . $name . "\n";
$body .= "Company:       " . ($company ?: '—') . "\n";
$body .= "Email:         " . $email . "\n";
$body .= "Phone:         " . ($phone ?: '—') . "\n";
$body .= "Industry:      " . ($industry ?: '—') . "\n";
$body .= "Project Goals: " . ($project_goals ?: '—') . "\n";
$body .= "Message:       " . ($message ?: '—') . "\n\n";
$body .= "==============================================\n";
$body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$body .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

// Email headers
$headers  = "From: " . $SITE_NAME . " <" . $SEND_FROM . ">\r\n";
$headers .= "Reply-To: " . $name_safe . " <" . $email_safe . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send the email
$sent = @mail($SEND_TO, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'We could not send your request at this time. Please email us directly at ' . $SEND_TO . '.'
    ]);
}
