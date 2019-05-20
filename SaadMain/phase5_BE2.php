<?php
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', true);

$q = $_GET['q'];

$servername = "localhost:3306";
$username = "cpses_saeezru8f7@localhost";
$password = "61Stockton!";
$dbname = "saadusma_SARA";
	
$conn = new mysqli($servername, $username, $password, $dbname);
		 
if($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM S_R WHERE word='" . $q . "';";
$result = $conn->query($sql);

if($result->num_rows > 0) 
{
	$i = 1;
	$prvTITLE = "";
	$prvURL = "";
    $prvDESC = "";
	
    while($row = $result->fetch_assoc()) 
	{
		if($prvTITLE != $row["title"] || $prvURL != $row["url"] || $prvDESC != $row["des"])
		{
		    $rI = "p5r" . strval($i);
						
		    echo "<tr id='" . $rI . "' class='r3'><td class='sCell'><input type=\"checkbox\" onclick=\"selectR('" . $rI . "')\"><p>" .
		         $row["title"] . "</p></td><td class='sCell'><center><a href=\"" . $row["url"] . "\" style='color:blue'>" .
		         $row["url"] . "</a></center></td><td class='sCell'>" .
			     $row["des"] . "</td></tr>";
		    $i++;
		}
		
		$prvTITLE = $row["title"];
		$prvURL = $row["url"];
        $prvDESC = $row["des"];
    }
}else 
 {
     echo "<tr class='r3'><td class='sCell'>N/A</td><td class='sCell'>N/A</td><td class='sCell'>N/A</td></tr>";
 }
 
 $conn->close();
?>