<?php
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', true);

$servername = "mars.cs.qc.cuny.edu";
$username = "chjo5232";
$password = "23145232";
$dbname = "chjo5232";
	
$conn = new mysqli($servername, $username, $password, $dbname);
		 
if($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
 
//start with a base url
$url = 'https://en.wikipedia.org/wiki/Dark_Souls';

for($i = 0; $i < 25; $i++) 
{
	$lastURL = $url; 
    
    $url = storeWordsAndURL($url); 
    
    if(!validTags($url))
    {
        $url = $lastURL;
    }    
}

function validTags($u)
{
	$dom = new DOMDocument('1.0');
    @$dom->loadHTMLFile($u);
    $h1tags = $dom->getElementsByTagName('h1');
	$ptags = $dom->getElementsByTagName('p');
    
    if($h1tags->length > 0 && $ptags->length > 0)
    {
        return true;   
    }else
     {
         return false;
     }
}

function storeWordsAndURL($url)
{
    $dom = new DOMDocument('1.0');
    @$dom->loadHTMLFile($url);
    $h1tags = $dom->getElementsByTagName('h1');
	$ptags = $dom->getElementsByTagName('p');
	$t = true;
	global $conn;
	
	foreach($h1tags as $h1tag)
	{
		$h1tagValue = str_replace("\n", "", $h1tag->nodeValue);
		$words = explode(" ", $h1tagValue);
		
		if(preg_match('/[a-zA-Z]/', $h1tagValue))
		{
	        foreach($ptags as $ptag)
	        {
		        $ptagValue = str_replace("\n", "", $ptag->nodeValue);
		        $ptagValue = str_replace("'", "''", $ptagValue);
		
		        if(preg_match('/[a-zA-Z]/', $ptagValue) && strlen($ptagValue) <= 500)
		        {
					foreach($words as $word)
                    {
						$sql = "SELECT * FROM S_R WHERE word='" . $word . "';";
						$result = $conn->query($sql);
						
                        if($result->num_rows == 0)
						{
							$word = str_replace(array(':', ';', '-', '/', '\\', ',', '_', '\'', '\"'), '', $word);
                            $sql = "INSERT INTO S_R VALUES ('" . $word . "', '" . $h1tagValue . "', '" . $url . "', '" . $ptagValue . "');";

                            if($conn->query($sql) === TRUE) 
						    {
                            }
						}else
						 {
							 while($row = $result->fetch_assoc()) 
	                         {
								 if($row["title"] == $h1tagValue && $row["url"] == $url && $row["des"] == $ptagValue)
								 {
									 $t = false;
									 break;
								 }
							 }
							 
							 if($t)
							 {
								 $word = str_replace(array(':', ';', '-', '/', '\\', ',', '_', '\'', '\"'), '', $word);
							     $sql = "INSERT INTO S_R VALUES ('" . $word . "', '" . $h1tagValue . "', '" . $url . "', '" . $ptagValue . "');";

                                 if($conn->query($sql) === TRUE) 
						         {
                                 }
						     }
						 }
                    }
					
					break;
		        }
	        }
			
			break;
		}
	}
	
    $aTags = $dom->getElementsByTagName('a');
    $randomLink = $aTags[rand (0, $aTags->length - 1)];
    $href = $randomLink->getAttribute('href');
	
    while(strpos($href, 'www') == false)
    {
         $randomLink = $aTags[rand (0, $aTags->length - 1)];
         $href = $randomLink->getAttribute('href');
    }
    
    return $href;
}

$conn->close();
?>
