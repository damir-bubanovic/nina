/**
 * Initial Global Values
 */
var delimiter = String.fromCharCode(0x0A);
var header = "HRVHUB30";
var currency = "HRK";

var package;
var packagePrice;
var payerNameSurname;
var payerAddressStreetNumber;
var payerCity;
var emailAddress;
var receiverNameSurname;
var receiverAddressStreetNumber;
var receiverCity;
var termsCond;


/**
 * Payment
 * 1) verify data
 * 2) create barcode
 * 3) send email
 */
function payment() {

	var verify = new Promise(function(resolve, reject) {
		/**
		 * Package Selection & price
		 */
		// package = document.getElementById('packageSelection').value;
		// if (package == maxValueLength.package) {
		// 	error_title.innerHTML = errorMessage.package;
		// 	error.show();
		// 	reject();
		// }
		// packagePrice = price[package];

		/**
		 * Payer Name Surname
		 */
		// payerNameSurname = document.getElementById('payerNameSurname').value;
		// payerNameSurname = payerNameSurname.toUpperCase();
		// payerNameSurname = changeCharacters(payerNameSurname);

		// if (checkLengthOfInput(payerNameSurname, maxValueLength.minName, maxValueLength.nameSurname) === false) {
		// 	error_title.innerHTML = errorMessage.payerNameSurname;
		// 	error.show();
		// 	document.getElementById('payerNameSurname').value = '';
		// 	reject();
		// }


		/**
		 * Payer Address Street Number
		 */
		// payerAddressStreetNumber = document.getElementById('payerAddressStreetNumber').value;
		// payerAddressStreetNumber = payerAddressStreetNumber.toUpperCase();
		// payerAddressStreetNumber = changeCharacters(payerAddressStreetNumber);

		// if (checkLengthOfInput(payerAddressStreetNumber, maxValueLength.minName, maxValueLength.addressStreetNumber) === false) {
		// 	error_title.innerHTML = errorMessage.payerAddressStreetNumber;
		// 	error.show();
		// 	document.getElementById('payerAddressStreetNumber').value = '';
		// 	reject();
		// }


		/**
		 * Payer City Number
		 */
		// var payerCityNumber = document.getElementById('payerCityNumber').value;
		// if (checkCityNumberInput(payerCityNumber) === false) {
		// 	error_title.innerHTML = errorMessage.payerCityNumber;
		// 	error.show();
		// 	document.getElementById('payerCityNumber').value = '';
		// 	reject();
		// }



		/**
		 * Payer City
		 */
		// payerCity = document.getElementById('payerCity').value;
		// payerCity = payerCity.toUpperCase();
		// payerCity = changeCharacters(payerCity);

		// if (checkLengthOfInput(payerCity, maxValueLength.minCity, maxValueLength.city) === false) {
		// 	error_title.innerHTML = errorMessage.payerCity;
		// 	error.show();
		// 	document.getElementById('payerCity').value = '';
		// 	reject();
		// }
		// payerCity = payerCityNumber + ' ' + payerCity;


		/**
		 * Payer Email Address
		 */
		// emailAddress = document.getElementById('emailAddress').value;
		// if (validateEmail(emailAddress) === false) {
		// 	error_title.innerHTML = errorMessage.emailAddress;
		// 	error.show();
		// 	document.getElementById('emailAddress').value = '';
		// 	reject();
		// }




		/**
		 * Receiver Name Surname
		 */
		// receiverNameSurname = document.getElementById('receiverNameSurname').value;
		// receiverNameSurname = receiverNameSurname.toUpperCase();
		// receiverNameSurname = changeCharacters(receiverNameSurname);


		// if (checkLengthOfInput(receiverNameSurname, maxValueLength.minName, maxValueLength.nameSurname) === false) {
		// 	error_title.innerHTML = errorMessage.receiverNameSurname;
		// 	error.show();
		// 	document.getElementById('receiverNameSurname').value = '';
		// 	reject();
		// }


		/**
		 * Reciever Address Street Number
		 */
		// receiverAddressStreetNumber = document.getElementById('receiverAddressStreetNumber').value;
		// receiverAddressStreetNumber = receiverAddressStreetNumber.toUpperCase();
		// receiverAddressStreetNumber = changeCharacters(receiverAddressStreetNumber);

		// if (checkLengthOfInput(receiverAddressStreetNumber, maxValueLength.minName, maxValueLength.addressStreetNumber) === false) {
		// 	error_title.innerHTML = errorMessage.receiverAddressStreetNumber;
		// 	error.show();
		// 	document.getElementById('receiverAddressStreetNumber').value = '';
		// 	reject();
		// }


		/**
		 * Reciever City Number
		 */
		// var recieverCityNumber = document.getElementById('recieverCityNumber').value;
		// if (!checkCityNumberInput(recieverCityNumber) === false) {
		// 	error_title.innerHTML = errorMessage.recieverCityNumber;
		// 	error.show();
		// 	document.getElementById('recieverCityNumber').value = '';
		// 	reject();
		// }



		/**
		 * Reciever City
		 */
		// receiverCity = document.getElementById('receiverCity').value;
		// receiverCity = receiverCity.toUpperCase();
		// receiverCity = changeCharacters(receiverCity);

		// if (!checkLengthOfInput(receiverCity, maxValueLength.minCity, maxValueLength.city) === false) {
		// 	error_title.innerHTML = errorMessage.receiverCity;
		// 	error.show();
		// 	document.getElementById('receiverCity').value = '';
		// 	reject();
		// }
		// receiverCity = recieverCityNumber + ' ' + receiverCity;


		/**
		 * Terms & Conditions
		 */
		// termsCond = document.getElementById('termsCond').checked;
		// if (termsCond === false) {
		// 	error_title.innerHTML = errorMessage.termsCond;
		// 	error.show();
		// 	reject();
		// }
		

		resolve();

	});


	var barcode = new Promise(function(resolve, reject) {

		// var _companyName = "Min.financija,Porezna up.";
		// var _companyAddress = "Boskoviceva 5";
		// var _companyCity = "10000 Zagreb";
		// var _companyIBAN = "HR7610010051700036001";
		// var _companyModel = "HR68";
		// var _companyCallNumber = "2046-20912515645-0901";
		// var _codeIntent = "GOVT";

		// var _paymentPurpose = "Uplata javnih davanja";


		// var code = header.concat(
		// 	delimiter,
		// 	currency, delimiter,
		// 	packagePrice, delimiter,
		// 	payerNameSurname, delimiter,
		// 	payerAddressStreetNumber, delimiter,
		// 	payerCity, delimiter,
		// 	_companyName, delimiter,
		// 	_companyAddress, delimiter,
		// 	_companyCity, delimiter,
		// 	_companyIBAN, delimiter,
		// 	_companyModel, delimiter,
		// 	_companyCallNumber, delimiter,
		// 	_codeIntent, delimiter,
		// 	_paymentPurpose, delimiter,
		// );



		// OVDJE JOŠ DODATNO POSTAVI DA SU PODACI ISPUNJENI
		// if (!packagePrice || !payerNameSurname || !payerAddressStreetNumber || !payerCity) {
		// 	reject();
		// } else {
		// 	var canvas = document.getElementById("barcodeImg");
		// 	PDF417.draw(code, canvas);
		// 	resolve();
		// }
		resolve();
	});


	var email = new Promise(function(resolve, reject) {
		/**
		 * Get date time
		 */
		// const currentDate = new Date();
		// const options = {
		// 	weekday: 'long', 
		// 	year: 'numeric', 
		// 	month: 'short', 
		// 	day: 'numeric', 
		// 	hour: 'numeric',
		// 	minute: 'numeric',
		// 	second: 'numeric'
		// };
		// var today = currentDate.toLocaleDateString('hr-HR', options);



		// if (2 === 1) {
		// 	// OVDJE NAPISAT AKO PODACI NISU STAVLJENI ILI IH NEMA
		// 	// reject();
		// } else {
		// 	var payerReceiverInfo = {
		// 		from_name: "Bebine Stvarcice",
		// 		to_name: "Nikolina",
		// 		package: "S1",
		// 		today: today,
		// 		payerNameSurname: "Marko Valic",
		// 		payerAddressStreetNumber: "Kalnicka 77",
		// 		payerCity: "20000 Slavonski broj",
		// 		emailAddress: "marko.valic@gmail.com",
		// 		receiverNameSurname: "Veljka Duvnic",
		// 		receiverAddressStreetNumber: "Zazina 2",
		// 		receiverCity: "13400 Pozega",
		// 	};

		// 	emailjs.send('service_fzc5jd8', 'template_ss0fqhc', payerReceiverInfo)
		// 			.then(function(res) {
		// 				console.log("success", res.status);
		// 			});

		// 	resolve();
		// }



		/**
		 * Ovaj resolve maknut poslije
		 */
		resolve();
	});


	Promise.all([verify, barcode, email])
		.then(function() {
			console.log('Everything OK');
		})
		.catch(function() {
			console.log('Not Working');
			return;
		});
		// .catch(function() {
		// 	return;
		// });
}



/**
 * Universal Error
 */
// var error = new bootstrap.Modal(document.getElementById('error'), {
// 	keyboard: false
// });
// var error_title = document.getElementById('errorTitle');


/**
 * Error Messages
 * @type {Object}
 */
const errorMessage = {
	package: 					"Molimo vas odaberite paket",
	payerNameSurname: 			"Vaše ime i prezime - predugi, prekratak ili netočan unos",
	payerAddressStreetNumber: 	"Vaša adresa i kućanski broj - predugi, prekratak ili netočan unos",
	payerCityNumber: 			"Vaš poštanski broj nije točan",
	payerCity: 					"Vaše mjesto - predugi, prekratak ili netočan unos",
	receiverNameSurname: 		"Ime i prezime primaoca paketa - predugi, prekratak ili netočan unos",
	receiverAddressStreetNumber:"Adresa i kućanski broj primaoca paketa - predugi, prekratak ili netočan unos",
	recieverCityNumber: 		"Poštanski broj primaoca paketa nije točan",
	receiverCity: 				"Mjesto primaoca paketa - predugi, prekratak ili netočan unos",
	termsCond: 					"Molim vas pristanite na uvjete prodaje",
	emailAddress: 				"Vaša email adresa nije točna"
}

/**
 * Package Price
 * @type {Object}
 */
const price = {
	S1: 	'000000000010000',
	S2: 	'000000000020000',
	M1: 	'000000000030000',
	M2: 	'000000000040000',
	M3: 	'000000000050000',
	M4: 	'000000000060000',
	L1: 	'000000000070000',
	L2: 	'000000000080000',
}

/**
 * Allowed Lengths of input field values
 * @type {Object}
 */
const maxValueLength = {
   package: 					0,
   nameSurname: 				30,
   addressStreetNumber: 		27,
   city: 						22,
   minName: 					5,
   minCity: 					2,
   cityNumberMin: 				10000,
   cityNumberMax: 				53296,
};

/**
 * Change Problematic Croatian Characters
 * @param  {[string]} 	value 	[string with šđčćž,-.]
 * @return {[string]}       	[string with sdccz  ]
 */
function changeCharacters(value) {
	return value
			.replaceAll('Š', 'S')
			.replaceAll('D', 'DZ')
			.replaceAll('Č', 'C')
			.replaceAll('Ć', 'C')
			.replaceAll('Ž', 'Z')
			.replaceAll('-', ' ')
			.replaceAll('.', ' ')
			.replaceAll(',', ' ');
}

/**
 * Check Length of Input Field Values (too short or too long)
 * @param  {[string]} 	value 	[value string]
 * @param  {[integer]} 	min   	[min lengths of input field values]
 * @param  {[integer]} 	max   	[max lengths of input field values]
 * @return {[boolean]}       	[reject if too long or too short]
 */
function checkLengthOfInput(value, min, max) {
	if (value.length < min || value.length > max) {
		return false;
	}
}

/**
 * Check City Number Input Field Value (only specific range of numbers)
 * @param  {[integer]} 	value 	[value integer]
 * @return {[boolean]}       	[reject if number not in allowed range]
 */
function checkCityNumberInput(value) {
	if (value < maxValueLength.cityNumberMin || value > maxValueLength.cityNumberMax) {
		return false;
	}
}


/**
 * Validate email address
 */
function validateEmail(email) {
	const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return res.test(String(email).toLowerCase());
}