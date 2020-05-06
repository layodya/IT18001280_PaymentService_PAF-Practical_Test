$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();

}); 
		

$(function (){
	var $payments = $('#payments');
	var $payID = $('#payID');
	var $cardName = $('#cardName');
	var $cardNo = $('#cardNo');
	var $zipCode = $('#zipCode');
	var $secCode = $('#secCode');
	var $hospitalID = $('#hospitalID');
	var $patientID = $('#patientID');
	var $AID = $('#AID');
	

	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/Payment/webapi/payment/',
		success: function(payments){
			//console.log('success',data);
			$.each(payments, function(i, payment){
				$payments.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
						    +'Payment ID:<span class="noedit payID">' + payment.payID +'</span><input class="edit payID"/>'+'<br>'
							+'Card Name:<span class="noedit cardName">' + payment.cardName +'</span><input class="edit cardName"/>'+'<br>'
							+'Card Number:<span class="noedit cardNo">'+ payment.cardNo +'</span><input class="edit cardNo"/> '+'<br>'
							+'Zip Code:<span class="noedit zipCode">'+ payment.zipCode +'</span><input class="edit zipCode"/> '+'<br>'
							+'Sec Code:<span class="noedit secCode">'+ payment.secCode +'</span><input class="edit secCode"/>'+'<br>'
							+'Hospital ID:<span class="noedit hospitalID">'+ payment.hospitalID +'</span><input class="edit hospitalID"/> '+'<br>'
							+'patient ID:<span class="noedit patientID">'+ payment.patientID +'</span><input class="edit patientID"/>'+' <br>'
							+'AID:<span class="noedit AID">'+ payment.AID +'</span><input class="edit AID"/>'+'<br>'
							+'<input type="button" id="'+ payment.payID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
							+'<input type="button" " value="Edit" class="editpayment btn btn-outline-primary noedit">'+'<br>'
							+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
							+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');

			});
		},
		error: function() {
			alert('Payment loading error...');
		}
	});
	
	
	$('#btnSave').on('click', function(){
		
		//Show and Clear Messages
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		//Validation Function
		var status = validatePaymentForm(); 
		

		
		//Check any Error
		if (status != true)
		 {
			 $("#alertError").text(status);
			 $("#alertError").show();
			 return;
		 } 

		
		

		
		var payment = {

				payID: $payID.val(),
				cardName: $cardName.val(),
				cardNo: $cardNo.val(),
				zipCode: $zipCode.val(),
				secCode: $secCode.val(),
				hospitalID: $hospitalID.val(),
				patientID: $patientID.val(),
				AID: $AID.val(),
		};
		

		
		$.ajax({
			headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
			type: 'POST',
			url: 'http://localhost:8080/Payment/webapi/payment/',
			data: JSON.stringify(payment),
			dataType: 'json',
			success: function(newpayment){
				//console.log("Inserted");
				$payments.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
					    +'Payment ID:<span class="noedit payID">' + newpayment.payID +'</span><input class="edit payID"/>'+'<br>'
						+'Card Name:<span class="noedit cardName">' + newpayment.cardName +'</span><input class="edit cardName"/>'+'<br>'
						+'Card Number:<span class="noedit cardNo">'+ newpayment.cardNo +'</span><input class="edit cardNo"/> '+'<br>'
						+'Zip Code:<span class="noedit zipCode">'+ newpayment.zipCode +'</span><input class="edit zipCode"/> '+'<br>'
						+'Sec Code:<span class="noedit secCode">'+ newpayment.secCode +'</span><input class="edit secCode"/>'+'<br>'
						+'Hospital ID:<span class="noedit hospitalID">'+ newpayment.hospitalID +'</span><input class="edit hospitalID"/> '+'<br>'
						+'patient ID:<span class="noedit patientID">'+ newpayment.patientID +'</span><input class="edit patientID"/>'+' <br>'
						+'AID:<span class="noedit AID">'+ newpayment.AID +'</span><input class="edit AID"/>'+'<br>'
						+'<input type="button" id="'+ newpayment.payID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
						+'<input type="button" " value="Edit" class="editpayment btn btn-outline-primary noedit">'+'<br>'
						+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
						+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');

				//Show Success Message
				$("#alertSuccess").text("Your Payment Saved");
				$("#alertSuccess").show();

				$("#formPayment")[0].reset();
				
				
			},
			
			error: function() {
				alert('Payment Saving Error');
			}
		});
		
		function validatePaymentForm()
		{
			if ($payID.val().trim() == "")
			{
				return "Please Insert Your Payment ID";
			}
			
			if ($cardName.val().trim() == "")
			{
				return "Please Insert Your Card Name";
			}
			if ($cardNo.val().trim() == "")
			{
				return "Please Insert Your Card Number";
			}
			
			if ($zipCode.val().trim() == "")
			{
				return "Please Insert Your Zip Code";
			}
			
			if ($secCode.val().trim() == "")
			{
				return "Please Insert Your Sec Code";
			}
			if ($hospitalID.val().trim() == "")
			{
				return "Please Insert Your Hospital ID";
			}
			if ($patientID.val().trim() == "")
			{
				return "Please Insert Your Patient ID";
			}
			
			if ($AID.val().trim() == "")
			{
				return "Please Insert Your AID";
			}
			
			return true;
		}

		
	});
	
	
	$payments.delegate('.remove','click',function(){
		var $li=$(this).closest('li');
		var self = this;
		$.ajax({
			type:'DELETE',
			url:'http://localhost:8080/Payment/webapi/payment/'+$(this).attr('id'),
			success: function(){
				console.log("Deleted");
				$(self);
				$li.fadeOut(300,function(){
					$(this).remove();
					
					$("#alertSuccess").text("Payment Delete Successfully");
					$("#alertSuccess").show(); 
					
				})
				
			},
		
			error: function() {
				alert('Payment Delete Error');
			}
		});
	});
	
	
	$payments.delegate('.editpayment','click',function(){
		
		var $li=$(this).closest('li');
		
		$li.find('input.payID').val($li.find('span.payID').html());
		$li.find('input.cardName').val($li.find('span.cardName').html());
		$li.find('input.cardNo').val($li.find('span.cardNo').html());
		$li.find('input.zipCode').val($li.find('span.zipCode').html());
		$li.find('input.secCode').val($li.find('span.secCode').html());
		$li.find('input.hospitalID').val($li.find('span.hospitalID').html());
		$li.find('input.patientID').val($li.find('span.patientID').html());
		$li.find('input.AID').val($li.find('span.AID').html());
		
		$li.addClass('edit');
	});
	
	$payments.delegate('.canceledit','click',function(){
		$(this).closest('li').removeClass('edit');
		
	});
	
	$payments.delegate('.saveedit','click',function(){
		var $li=$(this).closest('li');
		var payment={
				
				payID: $li.find('input.payID').val(),
				cardName: $li.find('input.cardName').val(),
				cardNo: $li.find('input.cardNo').val(),
				zipCode: $li.find('input.zipCode').val(),
				secCode: $li.find('input.secCode').val(),
				hospitalID: $li.find('input.hospitalID').val(),
				patientID: $li.find('input.patientID').val(),
				AID: $li.find('input.AID').val()
				
		};
		
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
					
					
			},
			type: 'PUT',
			url: 'http://localhost:8080/Payment/webapi/payment/',
			data: JSON.stringify(payment),
			dataType: 'json',
			
			success: function(newPayment){
				$li.find('span.payID').html(newPayment.payID);
				$li.find('span.cardName').html(newPayment.cardName);
				$li.find('span.cardNo').html(newPayment.cardNo);
				$li.find('span.zipCode').html(newPayment.zipCode);
				$li.find('span.secCode').html(newPayment.secCode);
				$li.find('span.hospitalID').html(newPayment.hospitalID);
				$li.find('span.patientID').html(newPayment.patientID);
				$li.find('span.AID').html(newPayment.AID);
				$li.removeClass('edit');
				
				$("#alertSuccess").text("Your Payment Updated");
				$("#alertSuccess").show();
				},
				
				error: function(){
				alert('Payment Update Error');
			}
			
		});
	});
	
	
	
	
	
	
});