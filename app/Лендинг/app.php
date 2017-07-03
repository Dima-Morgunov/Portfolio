<?php
	$email = trim($_POST['email']);
	$name = trim($_POST['name']);
	$sername = trim($_POST['sername']);

	if ($email == "" || $name == "" || $sername == "") {
		echo 'Заполнить все поля!';
	}
	elseif (!fister_var($email, FILTER_VALIDATE_EMAIL)){
		echo "Введите корректный фдрес электронной почты";
	}
	else{
		file_put_contents("apps.txt", "$dt $email $name $sername \n", FILE_APPEND) ;
		echo "1";
	}