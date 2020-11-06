
var dateStartReturn = moment().format('YYYY-MM-DD');
var dateEndReturn = new Date();
var dateStartOneWay;
var checkDateReturn = new Date();
var checkDateOneWay = moment().format('YYYY-MM-DD');

var currentDate = moment().format('YYYY-MM-DD');

var q = new Date();
var year = q.getFullYear(); var month = q.getMonth();

function randoNumber() {
	var num = Math.floor((Math.random() * 1000) + 50.00);
	var n = num.toFixed(2);
	return n;
}

	// RETURN //
$(function() {
  $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });
  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
	  dateStartReturn = null;
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
	  dateStartReturn = picker.startDate.format('DD/MM/YYYY');
	  dateEndReturn = picker.endDate.format('DD/MM/YYYY');
	  //dateStartReturn = picker.startDate.format('DD/MM/YYYY');
	  //dateEndReturn = picker.endDate.format('DD/MM/YYYY');
	  checkDateReturn = picker.startDate.format('YYYY-MM-DD');
  });
  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});

	// SINGLE //
$(function() {

$('input[name="singleDate"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });

  $('input[name="singleDate"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: year,
	minMonth: month,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {	//var years = moment().diff(start, 'years');
		dateStartOneWay = start.format('DD/MM/YYYY'); //document.getElementById("show2").innerHTML = date1;
		checkDateOneWay = start.format('YYYY-MM-DD');
  });
  /*$('input[name="singleDate"]').on('cancel.daterangepicker', function() {
      $(this).val('');
  });*/
});

	// YES NO //
function yesnoCheck() {
    if ($('input[id=single]:checked').length > 0) {
		document.getElementById("showMainBtn").style.display = "block";
		document.getElementById("firstDate").style.display = "block";
		document.getElementById("secondDate").style.display = "none";
		document.getElementById("show").innerHTML = "";
		document.getElementById("content1").style.display = "none";
		document.getElementById("content").style.display = "none";
		document.getElementById("title").style.display = "none";
		document.getElementById("title1").style.display = "none";
		document.getElementById("lineCard1").style.display = "none";
		document.getElementById("lineCard2").style.display = "none";
		document.getElementById("lineCard").style.display = "none";
    }
	if ($('input[id=return]:checked').length > 0) {
			//document.getElementById("showInfo").style.display = "none";
			//document.getElementById("showInfo1").style.display = "none";
			document.getElementById("showMainBtn").style.display = "block";
			document.getElementById("jumbShow").style.display = "none";
			
        document.getElementById("secondDate").style.display = "block";
		document.getElementById("firstDate").style.display = "none";
		document.getElementById("show").innerHTML = "";
		document.getElementById("content").style.display = "none";
		document.getElementById("content1").style.display = "none";
		document.getElementById("title").style.display = "none";
		document.getElementById("title1").style.display = "none";
		document.getElementById("lineCard").style.display = "none";
		document.getElementById("lineCard1").style.display = "none";
		document.getElementById("lineCard2").style.display = "none";
    }
}

var cities = ["Adelaide","Melbourne","Sydney","Seattle","Berlin","Brisbane","Darwin","Gold Coast","Perth","Paris","Tokyo","New York","Los-Angeles","Washington","Moscow","Berlin","Beijing","London","Miami","Seoul"];
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
autocomplete(document.getElementById("depart"), cities);
autocomplete(document.getElementById("arrive"), cities);

// Check same city inputs
function findCityArrival(city){
	var arrival = document.getElementById("arrive").value;
	return city == arrival;
}
function findCityDepart(city){
	var departure = document.getElementById("depart").value;
	return city == departure;
}

// END Check same city inputs

function validateName() {
	 document.getElementById('updateDiv').scrollIntoView();// JUMP TO SPECIFIC ID
			var arrivalCityCheck = cities.find(findCityArrival);
			var departureCityCheck = cities.find(findCityDepart);
		var arrival = document.getElementById("arrive").value;
		var departure = document.getElementById("depart").value;
	
		if ($('input[id=single]:checked').length > 0) {
			if(checkDateOneWay <= currentDate || arrival == null || departure == null  || arrival == "" || departure == "" ||
				arrivalCityCheck == departureCityCheck || arrivalCityCheck == null || departureCityCheck == null){
				document.getElementById("show").innerHTML = "Please check cities and dates";
				document.getElementById("title").style.display = "none";
				document.getElementById("title1").style.display = "none";
				document.getElementById("lineCard").style.display = "none";
				document.getElementById("lineCard1").style.display = "none";
				document.getElementById("lineCard1").style.display = "none";
				document.getElementById("content").style.display = "none";
				document.getElementById("content1").style.display = "none";
		} 
		else {
					loadCard();
						document.getElementById("content").style.display = "inline-flex";
						document.getElementById("show").innerHTML = "";
					document.getElementById("title").style.display = "block";
					document.getElementById("title1").style.display = "none";
					document.getElementById("lineCard").style.display = "block";
					document.getElementById("lineCard1").style.display = "block";
					document.getElementById("title").innerHTML = "<span id='span1'>" + "From " + "</span>" + departure + "<span id='span1'>" + " to " + "</span>" + arrival;
			}
		}
			// RETURN RETURN RETURN RETURN RETURN //
		if ($('input[id=return]:checked').length > 0 && dateEndReturn != null) {
			if(checkDateReturn <= currentDate || dateStartReturn == currentDate || checkDateReturn == undefined ||  arrival == null || departure == null  || arrival == "" || departure == "" ||
			   arrivalCityCheck == departureCityCheck || arrivalCityCheck == null || departureCityCheck == null){
				document.getElementById("show").innerHTML = "Please check cities and dates";
				document.getElementById("title").style.display = "none";
				document.getElementById("title1").style.display = "none";
				document.getElementById("lineCard").style.display = "none";
				document.getElementById("lineCard1").style.display = "none";
				document.getElementById("lineCard2").style.display = "none";
				document.getElementById("content").style.display = "none";
				document.getElementById("content1").style.display = "none";
			} else {
					loadCard();
						document.getElementById("content").style.display = "inline-flex";
						document.getElementById("content1").style.display = "inline-flex";
					document.getElementById("show").innerHTML = "";
					document.getElementById("lineCard").style.display = "block";
					document.getElementById("lineCard1").style.display = "block";
					document.getElementById("lineCard2").style.display = "block";
					document.getElementById("title").style.display = "block";
					document.getElementById("title1").style.display = "block";
					document.getElementById("title").innerHTML = "<span id='span1'>" + "From " + "</span>" + departure + "<span id='span1'>" + " to " + "</span>" + arrival;
					document.getElementById("title1").innerHTML = "<span id='span1'>" + "From " + "</span>" + arrival + "<span id='span1'>" + " to " + "</span>" + departure;
			}
		}
}

class Flight {
  constructor(id, arrival, departure, dateStart, time, time1, price) {
	this.id = id;
    this.arrival = arrival;
    this.departure = departure;
	this.dateStart = dateStart;
	this.time = time;
	this.time1 = time1;
	this.price = price;
  }
}

flights = new Array();
var num = "FF157";

var saveI;
function clickAlertBook(i){
	if ($('input[id=single]:checked').length > 0) {
		saveI = i;
		document.getElementById("jumbShow").style.display = "block";
		document.getElementById("one").innerHTML = flights[i].arrival +  " to " + flights[i].departure + " - " + flights[i].time + ":" + flights[i].time1 + " - " + flights[i].dateStart;
		document.getElementById("two").innerHTML = " AUD$ " + flights[i].price;
		document.getElementById("flightDetail").innerHTML = "Flight Details: " + num;
		document.getElementById("jumbShow").scrollIntoView();
	}
}


function returnMealPrice(mealInput){
	if(mealInput == "Chicken - AUD $15"){
		var meal = parseFloat("15.00");
		return meal; //return 15.00;
	} else if(mealInput == "Beef - AUD $18"){
		return 18.00;
	} else if(mealInput == "Fish - AUD $20"){
		return 20.00;
	} else{
		return 0.00;
	}
}

function returnMealInfo(mealInput){
	if(mealInput == "Chicken - AUD $15"){
		return "Chicken";
	} else if(mealInput == "Beef - AUD $18"){
		return "Beef";
	} else if(mealInput == "Fish - AUD $20"){
		return "Fish";
	} else{
		return "None";
	}
}

function returnEntertainmentPrice(entInput){
	if(entInput == "Tablet set - AUD $20"){
		var ent = parseFloat("20.00");
		//return ent; //return 20.00;
		return 20.00;
	} else if(entInput == "Movies - AUD $15"){
		return 15.00;
	} else if(entInput == "Other - AUD $10"){
		return 10.00;
	} else{
		return 0.00;
	}
}

function returnEntInfo(entInput){
	if(entInput == "Tablet set - AUD $20"){
		return "Tablet set";
	} else if(entInput == "Movies - AUD $15"){
		return "Movies";
	} else if(entInput == "Other - AUD $10"){
		return "Other";
	} else{
		return "None";
	}
}

function returnLuggagePrice(luggageInput){
	if(luggageInput == "20kg - AUD $80"){
		return 80.00;
	} else if(luggageInput == "15kg - AUD $60"){
		//var lugg = parseFloat("60.00");
		return 60.00; //return 60.00;
	} else if(luggageInput == "10kg - AUD $40"){
		return 40.00;
	} else{
		return 0.00;
	}
}

function returnLuggageInfo(luggageInput){
	if(luggageInput == "20kg - AUD $80"){
		return "20kg";
	} else if(luggageInput == "15kg - AUD $60"){
		return "15kg";
	} else if(luggageInput == "10kg - AUD $40"){
		return "10kg";
	} else{
		return "None";
	}
}

class FlightExtra {
  //constructor(){}
  //constructor(arrival?:string, departure?:string, dateStart?:string, time?:number, time1?:number, price?:number, meal?:string, luggage?:string, entertainment?:string, seat?:string, num?:string) {
  //constructor(arrival?, departure?, dateStart?, time?, time1?, price?, meal?, luggage?, entertainment?, seat?, num?) {
  constructor(arrival, departure, dateStart, time, time1, price, meal, luggage, entertainment, seat, num, total, totalAll) {
    this.arrival = arrival;
    this.departure = departure;
	this.dateStart = dateStart;
	this.time = time;
	this.time1 = time1;
	this.price = price;
	this.meal = meal;
	this.luggage = luggage;
	this.entertainment = entertainment;
	this.seat = seat;
	this.num = num;
	this.total = total;
	this.totalAll = totalAll;
  }
}

flightExtraSingle;

var totalAll;
function clickCalculateBook(){
	if ($('input[id=single]:checked').length > 0) {
		var meal = document.getElementById("meal").value;
		var luggage = document.getElementById("luggage").value;
		var entertainment = document.getElementById("entertainment").value;
		var seat = document.getElementById("seat").value;
			var mealRrice = returnMealPrice(meal);
			var entPrice = returnEntertainmentPrice(entertainment);
			var luggagePrice = returnLuggagePrice(luggage);
		var totalPrice = mealRrice + entPrice + luggagePrice;
			var priceSave = parseFloat(flights[saveI].price);
		totalAll = totalPrice + priceSave;

		flightExtraSingle = new FlightExtra(flights[saveI].arrival, flights[saveI].departure, flights[saveI].dateStart, flights[saveI].time, flights[saveI].time1, 
							parseFloat(flights[saveI].price), meal, luggage, entertainment, seat, num, parseFloat(totalPrice), parseFloat(totalAll));
		
	/*document.getElementById("displayTicket").innerHTML = flightExtraSingle.arrival + " " + flightExtraSingle.departure + " " + flightExtraSingle.dateStart + " " + 
		flightExtraSingle.time + " " + flightExtraSingle.time1 + " " +  flightExtraSingle.price + " " + flightExtraSingle.meal + " " + flightExtraSingle.luggage + 
		" " + flightExtraSingle.entertainment + " " + flightExtraSingle.seat + " " + " " + flightExtraSingle.num + " " + flightExtraSingle.total.toFixed(2) + 
		" " + flightExtraSingle.totalAll.toFixed(2);*/
		
		//document.getElementById("displayTicket").innerHTML = totalPrice + " " + flights[saveI].price + " " + totalAll + " " + mealRrice;
		document.getElementById("displayTicket").innerHTML = "Total amount: AUD$ " + totalAll.toFixed(2);
		
		document.getElementById("displayInfo").innerHTML = "Seat: " + flightExtraSingle.seat + ". Meal: " + returnMealInfo(flightExtraSingle.meal) + ". Luggage: " + 
								returnLuggageInfo(flightExtraSingle.luggage) + ". Entertainment: " + returnEntInfo(flightExtraSingle.entertainment);
								
		document.getElementById("btnPay").style.display = "inline";
	}
}

function paymentClick(){
	if ($('input[id=single]:checked').length > 0) {
		document.getElementById("paymentDiv").style.display = "block";
		document.getElementById("jumbShow").style.backgroundColor = "#ebf2fa";
		document.getElementById("paymentDiv").scrollIntoView();
	}
}

function clickAlertPayment(){
	if ($('input[id=single]:checked').length > 0) {
		document.getElementById("paymentJump").style.display = "block";
		document.getElementById("contPayment").style.backgroundColor = "#ebf2fa";
	}
}

var fn; var ln; var email; var userName; var dob;
function clickPayment(){
				document.getElementById('paymentDiv').scrollIntoView();
	fn = document.getElementById("firstName").value;
	ln = document.getElementById("lastName").value;
	dob = document.getElementById("dob").value;
	userName = document.getElementById("username").value;
	email = document.getElementById("email").value;
	//document.getElementById("test").innerHTML = fn + " " + ln + " " + dob + " " + userName + " " + email;
  
  var sss = "<div class='modal fade' id='staticBackdrop' data-backdrop='static' data-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>"
  + "<div class='modal-dialog modal-dialog-centered'>"
  +  "<div class='modal-content'>"
  +    "<div class='modal-header'>"
  +      "<h5 class='modal-title' id='staticBackdropLabel'>" + "Please confirm personal details: " + fn +  " " + ln + "</h5>"
  +      "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
  +        "<span aria-hidden='true'>" + "&times;" + "</span>"
  +      "</button>"
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "Full name: " + fn + " " + ln + "</p>"
  +		 "<p>" + "Date of birth: " + dob + "</p>"
  +		 "<p>" + "Email: " + email + "</p>"
  +		 "<p>" + "UserName: " + userName + "</p>"
  +    "</div>"
  +    "<div class='modal-body'>"
  //+      "<p>" + "If you " + fn + " would like to stay with us" + "</p>"
  +      "<p>" + "Please " + fn + " stay with us and complete registration." + "</p>"
  +      "<p>" + "The temprorary password was sent to your email." + "</p>"
  +      "<p>" + "Please check it and finalize." + "</p>"
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "Thank you" + "</p>"
  +    "</div>"
  +    "<div class='modal-footer'>"
  +      "<button type='button' class='btn btn-secondary' data-dismiss='modal'>" + "Cancel" + "</button>"
  +      "<button type='button' data-dismiss='modal' onclick='clickAlertPayment()' class='btn btn_color'>" + "Correct" + "</button>"
  +    "</div>"
  +  "</div>"
  +"</div>"
  +"</div>";

  document.getElementById("card1").innerHTML = sss;
}

/*function updateDiv(){ 
    $( "#updateDiv" ).load(window.location.href + " #updateDiv" );
}

$(function() {
  $('#payButton').click(function() {
    var self = window.location.href;
    console.log("Loading '#updateDiv' from " + self);
    $('#payButton').load(self + ' #updateDiv');
  });
});*/

function payBtnCalc(){
	var aaa = "<div class='modal fade' id='staticBackdrop1' data-backdrop='static' data-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>"
  + "<div class='modal-dialog modal-dialog-centered'>"
  +  "<div class='modal-content'>"
  +    "<div class='modal-header'>"
  +      "<h5 class='modal-title' id='staticBackdropLabel'>" + "Payment confirmaton" + "</h5>"
  +      "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
  +        "<span aria-hidden='true'>" + "&times;" + "</span>"
  +      "</button>"
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "Thank you " + fn + "!" + "</p>"
  +      "<p>" + "Payment " + " of " + " AUD$ " + totalAll + " has been processed" + "</p>"
  +      "<p>" + "An email with details has been sent to " + email + "</p>"
  +    "</div>"
  +    "<div class='modal-footer'>"
  +      "<button type='button' data-dismiss='modal' onclick='clickAlertPayment()' class='btn btn_color'>" + "Close" + "</button>"
  +    "</div>"
  +  "</div>"
  +"</div>"
  +"</div>";

  document.getElementById("pay").innerHTML = aaa;
 
  document.getElementById("custInfo").innerHTML = fn + " " + ln;
  
		document.getElementById("showMainBtn").style.display = "none";
		document.getElementById("jumbShow").style.display = "none";	
        document.getElementById("secondDate").style.display = "none";
		document.getElementById("firstDate").style.display = "none";
		document.getElementById("show").innerHTML = "";
		document.getElementById("lineCard2").style.display = "none";
		document.getElementById("title").style.display = "none";
		document.getElementById("title1").style.display = "none";
		document.getElementById("lineCard").style.display = "none";
		document.getElementById("lineCard1").style.display = "none";
		document.getElementById("lineCard1").style.display = "none";
		document.getElementById("content").style.display = "none";
		document.getElementById("content1").style.display = "none";
		document.getElementById("paymentDiv").style.display = "none";
		document.getElementById("paymentJump").style.display = "none";
		
		document.getElementById("arrive").value = "";
		document.getElementById("depart").value = "";
		
		//document.getElementByName("single").checked = false;
		//document.getElementByName("return").checked = false;
		
		/*if($('#single').is(':checked')){
			$('#single').attr('checked', false);
		}else{
			$('#single').attr('checked', true);
		}
		
		if($('#return').is(':checked')){
			$('#return').attr('checked', false);
		}else{
			$('#return').attr('checked', true);
		}*/
				
		//document.getElementById("single").reset(); 
		//document.getElementById("return").reset();
		
		/*$('#updateDiv').load('main.html #updateDiv');
		
		$('#updateDiv').load(document.URL + ' #updateDiv>*');
		
		$( "#here" ).load(window.location.href + " #here" );
		
		updateDiv();
		
		$.get('/api/updateDiv', function(data) {
			$('#updateDiv').html(data);
		});*/
		
		var elements = document.getElementsByTagName("input");

		for (var i = 0; i < elements.length; i++) {
			if (elements[i].type == "radio") {
				elements[i].checked = false;
			}
		}
		
	document.getElementById("bodyId").scrollIntoView();
  //location.reload();
}

function custInfoFunc(){
	var qqq = "<div class='modal fade' id='staticBackdrop2' data-backdrop='static' data-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>"
  + "<div class='modal-dialog modal-dialog-centered'>"
  +  "<div class='modal-content'>"
  +    "<div class='modal-header'>"
  +      "<h5 class='modal-title' id='staticBackdropLabel'>" + "Order details for " + fn + " " + ln + "</h5>"
  +      "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
  +        "<span aria-hidden='true'>" + "&times;" + "</span>"
  +      "</button>"
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + fn + " " + ln + "</p>"
  +      "<p>" + dob + "</p>"
  +      "<p>" + email + "</p>"
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "From: " + flights[saveI].arrival + " to " + flights[saveI].departure + "</p>"
  +      "<p>" + "Flight number: " + num + "</p>"
  +      "<p>" + "Flight time : " + flights[saveI].time + ":" + flights[saveI].time1 + "</p>"
  +      "<p>" + "Flight date: " + flights[saveI].dateStart + "</p>"
  +      "<p>" + "Amount paid: " + " AUD$ " + totalAll + "</p>"  
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "Seat: " + flightExtraSingle.seat + "</p>"
  +      "<p>" + "Meal: " + flightExtraSingle.meal + "</p>"
  +      "<p>" + "Luggage: " + flightExtraSingle.luggage + "</p>"
  +      "<p>" + flightExtraSingle.entertainment + "</p>" 
  +    "</div>"
  //+    "<div class='modal-body'>"
  //+      "<button data-toggle='modal' data-target='#staticBackdrop3' onclick='changeCust()' type='button' class='btn btn_color1 btn-sm-1 btn-block'>" + "Update meal, luggage or entertainment" + "</button>"
  //+    "</div>"
  +    "<div class='modal-footer'>"
  +      "<button type='button' data-dismiss='modal' onclick='clickAlertPayment()' class='btn btn_color'>" + "Close" + "</button>"
  +    "</div>"
  +  "</div>"
  +"</div>"
  +"</div>";
  document.getElementById("showCust").innerHTML = qqq;
}

function changeCust(){
	var fff = "<div class='modal fade' id='staticBackdrop3' data-backdrop='static' data-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>"
  + "<div class='modal-dialog modal-dialog-centered'>"
  +  "<div class='modal-content'>"
  +    "<div class='modal-header'>"
  +      "<h5 class='modal-title' id='staticBackdropLabel'>" + "Order details for " + fn + " " + ln + "</h5>"
  +      "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
  +        "<span aria-hidden='true'>" + "&times;" + "</span>"
  +      "</button>"
  +    "</div>"
  +    "<div class='modal-body'>" 	//<input type="text" class="form-control" id="depart" placeholder="" value="" required="">
  +      "<p>" + fn + " " + ln + "</p>"
  //+		 "<label>" + "Update firts name" + "</label>"
  //+      "<input type='text' placeholder="+fn+">"
  //+		 "<label>" + "Update last name" + "</label>"
  //+      "<input type='text' placeholder="+ln+">"
  +      "<p>" + dob + "</p>"
  +      "<p>" + email + "</p>"
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "From: " + flights[saveI].arrival + " to " + flights[saveI].departure + "</p>"
  +      "<p>" + "Flight number: " + num + "</p>"
  +      "<p>" + "Flight time : " + flights[saveI].time + ":" + flights[saveI].time1 + "</p>"
  +      "<p>" + "Flight date: " + flights[saveI].dateStart + "</p>"
  +      "<p>" + "Amount paid: " + " AUD$ " + totalAll + "</p>"  
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "Seat: " + flightExtraSingle.seat + "</p>"
  +      "<p>" + "Meal: " + flightExtraSingle.meal + "</p>"
  +      "<p>" + "Luggage: " + flightExtraSingle.luggage + "</p>"
  +      "<p>" + flightExtraSingle.entertainment + "</p>" 
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<button onclick='changeCust()' type='button' class='btn btn_color1 btn-sm-1 btn-block'>" + "Change" + "</button>"
  +    "</div>"
  +    "<div class='modal-footer'>"
  +      "<button type='button' data-dismiss='modal' onclick='clickAlertPayment()' class='btn btn_color'>" + "Close" + "</button>"
  +    "</div>"
  +  "</div>"
  +"</div>"
  +"</div>";
  document.getElementById("showCustChange").innerHTML = fff;
}

function clickBook(i){
	//document.getElementById('content').scrollIntoView();
	//document.getElementById('jumbShow').scrollIntoView();

 var ddd = "<div class='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>"
  + "<div class='modal-dialog modal-dialog-centered' role='document'>"
  +  "<div class='modal-content'>"
  +    "<div class='modal-header'>"
  +      "<h5 class='modal-title' id='exampleModalLongTitle'>" + "Please confirm flight: " + flights[i].arrival +  " to " + flights[i].departure + "</h5>"
  +      "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
  +        "<span aria-hidden='true'>" + "&times;" + "</span>"
  +      "</button>"
  +    "</div>"
  +    "<div class='modal-body'>"
  +      "<p>" + "From: " + flights[i].arrival + " to " + flights[i].departure + "</p>"
  +      "<p>" + "Flight number: " + num + "</p>"
  +      "<p>" + "Flight time : " + flights[i].time + ":" + flights[i].time1 + "</p>"
  +      "<p>" + "Flight date: " + flights[i].dateStart + "</p>"
  +      "<p>" + "Price: " + " AUD$ " + flights[i].price + "</p>"  
  +    "</div>"
  +    "<div class='modal-footer'>"
  +      "<button type='button' class='btn btn-secondary' data-dismiss='modal'>" + "Cancel" + "</button>"
  +      "<button data-dismiss='modal' onclick=clickAlertBook("+i+") type='button' class='btn btn-primary btn_color'>" + "Book" + "</button>"
  +    "</div>"
  +  "</div>"
  + "</div>"
  + "</div>";
document.getElementById("card").innerHTML = ddd;


		document.getElementById("jumbShow").style.backgroundColor = "#c3d7ef";
		document.getElementById("contPayment").style.backgroundColor = "#c3d7ef";
		document.getElementById("paymentJump").style.backgroundColor = "#c3d7ef";
		document.getElementById("btnPay").style.display = "none";
		document.getElementById("displayTicket").innerHTML = "";
		document.getElementById("displayInfo").innerHTML = "";
}

function loadCard(){
	var arrival = document.getElementById("depart").value;
	var departure = document.getElementById("arrive").value;
	var x = "";
	
if ($('input[id=single]:checked').length > 0) {
	var time = 7.00; var time1 = 15;
	for(var i = 0; i < 8; i++){
		var price = randoNumber();
			singleFlight = new Flight(i+1, arrival, departure, dateStartOneWay, time, time1, parseFloat(price).toFixed(2));
			//flights.push(singleFlight);
			flights[i] = singleFlight;
		x += "<div class='col-md-3'>" +
				"<div class='card package-card'>"
					+ "<img id='imageId' class='card-img-top' src = 'FlyDreamAir1.png'>"
					+ "<div class='card-body badge card-img-overlay'>"
						+ "<h5 class='card-title package-card-title'>" + arrival +  " to " + departure + "</h5>"
						+ "<h6 id='boldText' class='card-text'>" + dateStartOneWay + " - " + time + ":" + time1 + "</h6>"
						+ "<h5 id='boldText' class='card-text'>" + "<label id='labelTetx'>" + " AUD$ " + "</label> " + price + "</h5>"
						+ "<button data-toggle='modal' data-target='#exampleModalCenter' onclick=clickBook("+i+") id="+i+" class='btn btn-outline-info' value="+i+">" + "Book " + /*(i+1) +*/ "</button>"
					+ "</div>" +
				"</div>" + "<br />" +
			 "</div>";
			 time+=2.00;
			 if(time > 21){
				time = 5;
			 }
	}
//<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">BTN</button>
}

var y = ""; var z = "";
if ($('input[id=return]:checked').length > 0) {
	var time = 7.00; var time1 = 15;
	for(var i = 0; i < 8; i++){
		x += "<div class='col-md-3'>" +
				"<div class='card package-card'>"
					+ "<img id='imageId' class='card-img-top' src = 'FlyDreamAir1.png'>"
					+ "<div class='card-body badge card-img-overlay'>"
						+ "<h5 class='card-title package-card-title'>" + arrival +  " to " + departure + "</h5>"
						+ "<h6 id='boldText' class='card-text'>" + dateStartReturn + " - " + time + ":" + time1 + "</h6>"
						+ "<h5 id='boldText' class='card-text'>" + "<label id='labelTetx'>" + " AUD$ " + "</label> " + randoNumber() + "</h5>"
						+ "<a href='#' class='btn btn-outline-info'>" + "Book" + "</a>"
					+ "</div>" +
				"</div>" + "<br />" + "<br />" +
			 "</div>";
		time += 2.00;
		if(time > 21){time = 9;}
	}
	
	//var time11 = 7.00; var time12 = 15;
	for(var i = 0; i < 8; i++){
		y += "<div class='col-md-3'>" +
				"<div class='card package-card'>"
					+ "<img id='imageId' class='card-img-top' src = 'FlyDreamAir1.png'>"
					+ "<div class='card-body badge card-img-overlay'>"
						+ "<h5 class='card-title package-card-title'>" + departure +  " to " + arrival + "</h5>"
						+ "<h6 id='boldText' class='card-text'>" + dateEndReturn + " - " + time + ":" + time1 + "</h6>"
						+ "<h5 id='boldText' class='card-text'>" + "<label id='labelTetx'>" + " AUD$ " + "</label> " + randoNumber() + "</h5>"
						+ "<a href='#' class='btn btn-outline-info'>" + "Book" + "</a>"
					+ "</div>" +
				"</div>" + "<br />" +
			 "</div>";
		time += 2.00;
	}
} 
document.getElementById("content").innerHTML = x;
document.getElementById("content1").innerHTML = y;
}