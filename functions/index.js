const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ orgin: true });
admin.initializeApp();

let transportor = nodemailer.createTransport({
	service: "gmail",
	auth: { user: config.user.email, pass: config.user.password },
});

// const email = document.getElementById("email").value;
// const message = document.getElementById("message").value;
// const name = document.getElementById("name").value;

// let mailOptions = {
// 	from: "Jake's Web Dev inc.",
// 	to: "jakermeyers92@gmail.com",
// 	subject: "email from form",
// 	html: `Name: ${name} - Email: ${email} - Message: ${message}`,
// };

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
	cors(request, response, () => {
		const dest = request.query.dest;

		const email = document.getElementById("email").value;
		const message = document.getElementById("message").value;
		const name = document.getElementById("name").value;

		let mailOptions = {
			from: "Jake's Web Dev inc.",
			to: "jakermeyers92@gmail.com",
			subject: "email from form",
			html: "hi",
		};

		return transportor.sendMail(mailOptions, (err, info) => {
			if (err) {
				return response.send(err.toString());
			}
			return response.send("sended");
		});
	});
});
