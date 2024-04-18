<?php
$servername = "localhost";
$username = "root";
$password = "julianmendoza03";
$dbname = "DESAFIOFINAL2.0";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

$sql = "INSERT INTO usuarios (nombre, correo, contraseña)
VALUES ('$nombre', '$correo', '$contraseña')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>