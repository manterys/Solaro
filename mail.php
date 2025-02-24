<?php

// Your email address
$recepient = "kontakt@solaro.pl";

$from = $_POST["email"];
$subject = "Zainteresowany ofertą Solaro";

$txt = "Zainteresowany ofertą Solaro: " . $from;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

mail($recepient, $subject, $txt, $headers);

?>