// document.getElementById("email").addEventListener("click", function() {
// 	Email.send({
// 		Host : "smtp.mailtrap.io",
// 		Username : "7e05eccf9279f0",
// 		Password : "75435c7c7cd623",
// 		To : 'damir.bubanovic@gmail.com',
// 		From : "babypack@gmail.com",
// 		Subject : "Test email",
// 		Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
// 	}).then(
// 		message => alert(message)
// 	);
// }); 


function sendMail() {
	var tempParams = {
		from_name: document.getElementById("fromName").value,
		to_name: document.getElementById("toName").value,
		message: document.getElementById("message").value,
	};

	emailjs.send('service_fzc5jd8', 'template_ss0fqhc', tempParams)
			.then(function(res) {
				console.log("success", res.status);
			});
}