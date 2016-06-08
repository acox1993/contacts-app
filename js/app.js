$(document).ready(function(){
	contactID = 0;
	contactsArray = [];

	$('.plusNumber').click(function(){
		$('.phoneNumber2').show();
	});
	
	$('.plusAddress').click(function() {
		$('.street2').show();
		$('.city2').show();
		$('.state2').show();
	});

	$('.add').click(function(){
		var firstName = $('.firstName').val();
		var lastName = $('.lastName').val();
		var phoneNumber = $('.phoneNumber').val();
		var phoneNumber2 = $('.phoneNumberTwo').val();
		var street = $('.street').val();
		var city = $('.city').val();
		var state = $('.state').val();
		var street2 = $('.streetTwo').val();
		var city2 = $('.cityTwo').val();
		var state2 = $('.stateTwo').val();
		$('input.firstName').val("");
		$('input.lastName').val("");
		$('input.phoneNumber').val("");
		$('input.phoneNumberTwo').val("");
		$('input.street').val("");
		$('input.city').val("");
		$('input.state').val("");
		$('input.streetTwo').val("");
		$('input.cityTwo').val("");
		$('input.stateTwo').val("");

		

		contactsArray.push({'contactID': contactID,'firstName': firstName, 'lastName': lastName, 'phoneNumber': phoneNumber, 'phoneNumber2': phoneNumber2, 'street': street, 'city': city, 'state': state, 'street2': street2, 'city2': city2, 'state2': state2});
		contactID++;
		console.log(contactsArray)
	});
		$('button.update').click(function(){
			$('div.contacts ul.con').html("");
			$.each(contactsArray, function() { 
				console.log(this);
				var contactHTML = "<div class='contactwrapper' id="+ this.contactID +"> <h4>" + this.firstName + " " + this.lastName + "</h4> <ul class="+ this.contactID+"> <li>First name: "+ this.firstName + "</li><li>Last name: " + this.lastName + " </li><li>Phone numbers: <ul><li>"+ this.phoneNumber +"</li><li>"+this.phoneNumber2+"</li></ul><li>Addresses: <ul><li>"+ this.street +", "+ this.city +"	, "+ this.state +"</li><li> "+ this.street2 +", "+ this.city2 +"	, "+ this.state2 +"</li></ul></ul> </div>";
			$("div.contacts").append(contactHTML);
			var contactLi = "<li> <a class="+ this.contactID+"> "+ this.firstName +" "+ this.lastName +"</a></li>";
			$(".contacts ul.con").append(contactLi);
			});
			$("li a").click(function(){
				$('div.appear').html("");
				var id = $(this).attr("class");
				$('div#' + id).show().appendTo('.appear');

			});


		});

	
});

// 1. Build out non-interactive version no css
// 2. commit
// 3. style
// 4. commit
// 5. make responsive
// 6. commit
// 7. have information post to plain array 
// 8. commit
// 9. make sure array sorts before being posted
// 10. commit
// 11. create prototype object
// 12. commit
// 13. have information post in new sub of original prototype
// 14. commit
// 15. have objects push to array
// 16. commit
// 17. when selected it pops up in screen to show object information
// 18. commit
// 19. all interactive
// 20. commit
// 21. go on to version 2