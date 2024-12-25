// function number() {
//   const codenumber = document.getElementById("personal-number").value;
//   const phonenumber = codenumber.replace(/\D/g, "");
//   if (phonenumber.length !== 10) {
//     alert('"Phone number is required');
//     return false;
//   }
//   if (phonenumber.charAt(0) === "0" || phonenumber.charAt(0) === "1") {
//     alert("Invalid phone number");
//     return false;
//   }
//   if (!/^+$/.test(codenumber)) {
//     alert("Personal number is required");
//     return false;
//   }
//   alert("Personal number is required");
//   return true;
// // }
// function number() {
//   const codenumber = document.getElementById("personal-number").value;
//   const phonenumber = codenumber.replace(/\D/g, "");

//   if (phonenumber.length > 10) {
//     alert("Number cannot exceed 10 digits");
//     return false;
//   }

//   if (phonenumber.charAt(0) === "0" || phonenumber.charAt(0) === "1") {
//     alert("Invalid phone number");
//     return false;
//   }

//   if (!/^\d+$/.test(codenumber)) {
//     alert("Personal number is required");
//     return false;
//   }

//   return true;
// // }
// function number() {
//   const codenumber = document.getElementById("personal-number").value;
//   const phonenumber = document.getElementById("mobile-number").value;

//   // შევამოწმოთ პირადი ნომერი
//   if (!codenumber) {
//     alert("პირადი ნომერი სავალდებულოა");
//     return false;
//   }

//   if (!/^\d{11}$/.test(codenumber)) {
//     alert("პირადი ნომერი უნდა შედგებოდეს 11 ციფრისგან");
//     return false;
//   }

//   // შევამოწმოთ ტელეფონის ნომერი
//   if (!phonenumber) {
//     alert("ტელეფონის ნომერი სავალდებულოა");
//     return false;
//   }

//   if (!/^5\d{8}$/.test(phonenumber)) {
//     alert("ტელეფონის ნომერი უნდა იწყებოდეს 5-ით და შედგებოდეს 9 ციფრისგან");
//     return false;
//   }

//   return true;
// }

// function validateForm() {
//   const personalNumber = document.getElementById("personal-number").value;
//   const mobileNumber = document.getElementById("mobile-number").value;

//   // პირადი ნომრის შემოწმება
//   if (personalNumber.length !== 11) {
//     alert("პირადი ნომერი უნდა შედგებოდეს 11 ციფრისგან");
//     return false;
//   }
//   if (mobileNumber.length !== 9) {
//     alert("მობილურის ნომერი უნდა შედგებოდეს 9 ციფრისგან");
//     return false;
//   }

//   if (!mobileNumber.startsWith("5")) {
//     alert("მობილურის ნომერი უნდა იწყებოდეს 5-ით");
//     return false;
//   }

//   return true;
// // }
// const input1 = document.getElementById("personal-cheack");
// const input2 = document.getElementById("personal-number");

// input1.addEventListener("personal-cheack", function () {
//   if (this.value.length > 11) {
//     this.value = this.value.slice(0, 11);
//   }
// });

// input2.addEventListener("personal-number", function () {
//   if (this.value.length > 9) {
//     this.value = this.value.slice(0, 9);
//   }
// });
