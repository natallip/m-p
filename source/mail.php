<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$from = "Сообщение от пользователя: $name";

$email = $_POST['email'];
$mail = "Email пользователя: $email";

$textOfMessage = $_POST['message'];
$message = "Текст сообщения: $textOfMessage";

$data = array();


if ($name  === ' ') {
	$data['status'] = 'error';
	$data['text'] = 'Заполните имя!';
}else{
	$data['status'] = 'success';
	$data['text'] = 'Имя заполнено!';
};

if ($email  === ' ') {
  $data['status'] = 'error';
  $data['text'] = 'Заполните email!';
}else{
  $data['status'] = 'success';
  $data['text'] = 'Email заполнен!';
};

if ($textOfMessage  === ' ') {
  $data['status'] = 'error';
  $data['text'] = 'Напишите сообщение!';
}else{
  $data['status'] = 'success';
  $data['text'] = 'Сообщение написано!';
};


$result = mail('petkevich.natalli@gmail.com', $from, $mail, $message);

echo json_encode($data);
exit;
?> 

