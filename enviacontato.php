<?php
$your_email = "q@giovannims.com";

$headers= "From: ".$_POST['nome']." <".$_POST['email'].">\r\n";
$headers.='Content-type: text/html; charset=utf-8';
mail($your_email, $_POST['assunto'],  "
<html>
<head>
 <title>Contact Message</title>
</head>
<body>
<center>
<div style='width: 500px;background: #ffffff;height: auto;text-align: left;'>
    <h2 style='font-family: Georgia;font-weight: 100;font-style: italic;color: #67686A;'>Mensagem de Contato - Charqueadas Transportes</h2>
    <hr style='border-top: thin solid #D2D2D2;width: 500px;'></hr>
    <br>
	<strong>Nome :</strong> ".$_POST['nome']." <br/><br/>
	<strong>Email :</strong> ".$_POST['email']." <br/><br/>
	<strong>Mensagem :</strong><br/> <br>".$_POST['mensagem']." <br/><br/>
</div>
</center>
</body>
</html>" , $headers);
header("Location: ./index.html");
?>
