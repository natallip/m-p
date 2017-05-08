<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$from = 'Сообщение от пользователя: $name';

$email = $_POST['email'];
$mail = 'Email пользователя: $email';

$textOfMessage = $_POST['message'];
$message = 'Текст сообщения: $textOfMessage';

$data = array();


if ($name  === ' ') {
	$data['status'] = 'error';
	$data['text'] = 'Заполните имя!';
}else{
	$data['status'] = 'success';
	$data['text'] = 'Имя заполнено!';
}


$result = mail('petkevich.natalli@gmail.com', $message);

//echo json_encode(array( //////////
	//'status' => $result   //////////
//));                     ////////////
echo json_encode($data);
exit;
?> 



<!-- <?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$your_name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["messages"]);
/* Устанавливаем e-mail адресата */
$myemail = "petkevich.natalli@gmail.com";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$your_name = check_input($_POST["name"], "Введите ваше имя!");
$email = check_input($_POST["email"], "Введите ваш e-mail!");
$message = check_input($_POST["message"], "Вы забыли написать сообщение!");
/* Проверяем правильно ли записан e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
	show_error("<br /> Е-mail адрес не существует");
}
/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $your_name 
E-mail: $email 
Текст сообщения: $message 
Конец";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $yourname <$email> \r\n Reply-To: $email \r\n"; 
mail($myemail, $message_to_myemail, $from);
?>
<p>Ваше сообщение было успешно отправлено!</p>
<!-- <p>На <a href="index.php">Главную >>></a></p> -->
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	if ($problem && strlen($data) == 0)
	{
		show_error($problem);
	}
	return $data;
}
function show_error($myError)
{
	?>
	<html>
	<body>
		<p>Пожалуйста исправьте следующую ошибку:</p>
		<?php echo $myError; ?>
	</body>
	</html>
	<?php
	exit();
}
?> -->

<!-- <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (!empty($_POST['name']) && (!empty($_POST['email']) || !empty($_POST['message']))){
    if (isset($_POST['name'])) {
        if (!empty($_POST['name'])){
          $name = strip_tags($_POST['name']) . "<br>";
          $nameFieldset = "<b>Имя пославшего:</b>";
         }
    }
    if (isset($_POST['email'])) {
        if (!empty($_POST['email'])){
          $email = strip_tags($_POST['email']) . "<br>";
          $emailFieldset = "<b>Почта:</b>";
        }
    }
    if (isset($_POST['message'])) {
        if (!empty($_POST['message'])){
          $message = strip_tags($_POST['message']) . "<br>";
          $messageFieldset = "<b>Сообщение:</b>";
        }
    }
    if (isset($_POST['formInfo'])) {
        if (!empty($_POST['formInfo'])){
          $formInfo = strip_tags($_POST['formInfo']);
          $formInfoFieldset = "<b>Тема:</b>";
        }
    }
 
    $to = "petkevich.natalli@gmail.com"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom = "petkevich.natalli@gmail.com"; /*Укажите адрес, с которого будет приходить письмо */
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $subject = "$formInfo";
    $messageMym = "$nameFieldset $name
                $emailFieldset $mail
                $messageFieldset $message
                $formInfoFieldset $formInfo";
 
    $send = mail ($to, $subject, $messageMym, $headers);
        if ($send == 'true') {
            echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
        } else {
          echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
        }
  } else {
    echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
  }
} else {
  header ("Location: http://smartlanding.biz"); // главная страница вашего лендинга
} -->