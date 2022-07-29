<?php
    $nombres= ( empty($_POST['nombres']) ) ? NULL : $_POST['nombres']
    $email= ( empty($_POST['email']) ) ? NULL : $_POST['email']
    $mensaje= ( empty($_POST['mensaje']) ) ? NULL : $_POST['mensaje']

    $email_from = 'prueba@gmail.com'
    $email_asunto = 'Nuevo mensaje desde el sitio web'
    $email_body = "Nombres: $name.\n"
                "Email: $email.\n"
                "Mensaje: $mensaje"

    $hacia = 'Andresfp292@gmail.com';

    $headers = "Desde: $email_from \r\n"

    $headers .= "Responder a: $email \r\n"

    mail($hacia, $email_asunto, $email_body, $headers);

    header("Location: index.html");
?>