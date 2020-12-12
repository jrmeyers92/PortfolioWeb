const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ orgin: true });
admin.initializeApp();

const transportor = nodemailer.createTransport({
	service: "gmail",
	auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
	from: "Jake's Web Dev inc.",
	to: "jakermeyers92@gmail.com",
	subject: "testing",
	text: "test successful",
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
	cors(request, response, () => {
		transportor.sendMail(mailOptions, (error) => {
			if (error) {
				response.send(error);
			} else {
				response.send("message succesffully sent");
			}
		});
	});
});
