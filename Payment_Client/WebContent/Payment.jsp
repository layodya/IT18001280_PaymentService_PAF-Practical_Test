<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/styles.css">
</head>
<body>

<div class="container">
<div class="row">
	<div class="col-sm-4">
    
     
    </div>

	<div class="col-sm-4">
	<form id="formPayment" name="formPayment" method="post" action="Payment.jsp" >
		
		<br>
	
		<h3 class="text-center">Payment Details</h3>
		
		<br>
		<input type="text" id="payID" name="payID" class="form-control form-control-sm" placeholder="Payment ID" ><br>
		<input type="text" id="cardName" name="cardName" class="form-control form-control-sm" placeholder="Card Name" ><br>
		<input type="text" id="cardNo" name="cardNo" class="form-control form-control-sm" placeholder="Card number"><br>
		<input type="text" id="zipCode" name="zipCode" class="form-control form-control-sm" placeholder="Zip Code"><br>
		<input type="email" id="secCode" name="secCode" class="form-control form-control-sm" placeholder= "Sec Code"><br>
		<input type="text" id="hospitalID" name="hospitalID" class="form-control form-control-sm" placeholder="Hospital ID"><br>
		<input type="text" id="patientID" name="patientID" class="form-control form-control-sm" placeholder="Patient ID"><br>
		<input type="text" id="AID" name="AID" class="form-control form-control-sm" placeholder="AID"><br>
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-info my-4 btn-block">
		
			
		
	</form>
	</div>
	

	<div class="container text-center">
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
	</div>

	

	<div class="row">
			<ul style="list-style: none;" id="payments" class="row" ></ul>
	</div>

   </div>
	
</div>

<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>

</body>
</html>