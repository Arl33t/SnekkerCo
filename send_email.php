<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $file = $_FILES['attachment'];

    // File upload variables
    $file_name = $file['name'];
    $file_tmp = $file['tmp_name'];
    $file_size = $file['size'];
    $file_error = $file['error'];

    // Check if file was uploaded
    if ($file_error === 0) {
        $file_destination = 'uploads/' . $file_name;
        move_uploaded_file($file_tmp, $file_destination);
    }

    // Email variables
    $to = 'your-email@example.com';
    $from = $email;
    $headers = "From: $from";
    $headers .= "Reply-To: $from";
    $headers .= "MIME-Version: 1.0";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1";

    // Email body
    $body = "<h2>Contact Form Submission</h2>";
    $body .= "<p><strong>Name:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Subject:</strong> $subject</p>";
    $body .= "<p><strong>Message:</strong> $message</p>";

    // If file was uploaded, add attachment to email
    if ($file_error === 0) {
        $body .= "<p><strong>Attachment:</strong> <a href='$file_destination'>$file_name</a></p>";
    }

    // Send email
    mail($to, $subject, $body, $headers);

    // Redirect to thank you page
    header("Location: thankyou.html");
    exit();
}
?>
