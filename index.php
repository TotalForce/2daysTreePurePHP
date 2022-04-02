<?php
include 'db_connection.php';

/*
//reading headers
//fread //chunks
$body = file_get_contents('php://input');   //should i read it and only then route to specific logic?
if ($body != null) {
	echo $body;
	//error_log($body);
	
	//echo $_SERVER['HTTP_USER_AGENT'];
	//$headers = getallheaders();
	//echo $headers['User-Agent'];
	
	//http_response_code(200);//(401) if 204 then no body and exit();
	
	//header('Content-Type: image/png');
	    //header('Content-Type: MyStatt', false);
    //header('Location: http://localhost');

    //echo 'haha loool';
    //flush();
	//ob_start ob_end_flush()
	
	//compression
	
	//$browser = get_browser();
	//echo $browser->ismodilebrowser;
		
	
	//http_response_code(401);
	//header('WWW-Authenticate: Basic realm = "My Website"');
	//echo "You need to enter a valid username and password";
	//exit();	
} else {
	echo 'nor accepted body was null';
    //error_log('not accepted body is null');	
}

function insertNode ($text) {
	$conn = OpenCon();	
	$sql = "
	    insert into tree (name, description)
		values ('FOxxy', 'Some deasdsalk;dkas;ldkas;ldka;ldka;skda;kd');
		select last_insert_id();
	";
    //currval('tree_id'); //beed to know name of the sequence
    //returning id;
    //select last_insert_id()

	$res = $conn->query($sql) or die(mysqli_error($conn));   //prepate() -> bind params -> execute
	
	$arr = array();
	while ($r = mysqli_fetch_assoc($res)) {
	    $arr[] = $r;	
	}
	
	CloseCon($conn);

    return json_encode($arr, true);	
}
*/



//SERVER SOCKET TO CATCH-MAP BOTH REQUEST AND BODY 
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && ($_SERVER['HTTP_X_REQUESTED_WITH']) == 'insertNode') {
   
    //read the body $body = $_SERVER['body'];
    //http_get_request_body  //stream if no post
   
    $body = file_get_contents('php://input');
  
  
    echo $body; 
    echo "imagine that node has been inserted";
	
	
	
	//inserting code later
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
   
    $res = loadTree();  
	echo base64_encode(json_encode($res));
}

//do we need to check tree table exist
//do we need to check row count of table
//if obj has children - load them too
function loadTree () {
    $conn = OpenCon();	
	$sql = "
	    select 
              id,
			  isroot,
			  name,
			  description,
			  parent,
			  children
        from tree		
	";

	$res = $conn->query($sql) or die(mysqli_error($conn));   //prepate() -> bind params -> execute
	
	$arr = array();
	while ($r = mysqli_fetch_assoc($res)) {
	    $arr[] = $r;	
	}
	
	
	CloseCon($conn);
	return $arr;
}