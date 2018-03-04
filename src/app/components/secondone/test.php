<?php

$dbServerName = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "phppage";

$conn = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);


$sql = "SELECT * FROM `image` LIMIT 0, 6";
	$result = mysqli_query($conn, $sql);
	$resultCheck = mysqli_num_rows($result);
	if ($resultCheck > 0){
		while($row = mysqli_fetch_assoc($result)){     
			echo .$row['title'];
		}
	}
?>

