// document.writeln("Hello World");
// document.writeln(100); //tipe data number
// document.writeln("</br>");
// document.writeln(100.100);
//tipe data boolean
// document.writeln(true);
// document.writeln("</br>");
// document.writeln(false);
// tipe data string
// document.writeln("Nama : " + "Jeje");
// document.writeln("</br>");
// document.writeln("Blog : " + "OnedotZet");
// escape sequence
// document.writeln("<textarea cols='100' rows='10'>");
// document.writeln("Muhamad \nAbi \nFahzsa");
// document.writeln("\\Home\\Fahzsa");
// document.writeln("\tHome");
// document.writeln("\"Programmer\"");
// document.writeln('\'belajar JS\'');
// document.writeln("</textarea>");
// Variable dalam variable
// var fullName;
// fullName = "Jajang Jamaludin";
// fullName = "Aziz Nur Falah";
// fullName = "jeje";
// variable dan value
// var firstName = "Jajang";
// var lastName = "Jamaludin";
// var fullName = "Jajang" + "Jamaludin";
// document.writeln(firstName);
// variable dengan var
// var firstName = "Jajang";
// document.writeln(firstName);
// document.writeln("<br>");
// document.writeln(firstName);
// document.writeln("<br>");
// document.writeln(firstName);
// variable dengan let
// let firstName = "Jajang";
// document.writeln(firstName);
// document.writeln("<br>");
// document.writeln(firstName);
// document.writeln("<br>");
// document.writeln(firstName);
// variable dengan const
// const application = "belajar js dasar";
// application = "gak mau belajar"; //error
// document.writeln(application);
// Operator Aritmatika
// let result = 1 + 2;
// document.writeln("<p>1 + 2 =" + result + "</p>");
// let originalResult = result;

// result = result - 1;
// document.writeln("<p>" + originalResult + " -1 = " + result + "</p>");
// originalResult = result;

// result = result * 2;
// document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
// originalResult = result;
// Operator Augmented Assegments
// let result = 10;
// result += 10;
// document.writeln("<p>" + result + "</p>");

// result -= 10;
// document.writeln("<p>" + result + "</p>");

// result *= 10;
// document.writeln("<p>" + result + "</p>");
//Operator Unary
// let result = +1;
// document.writeln("<p>" + result + "</p>");

// result--;
// document.writeln("<p>" + result + "</p>");

// result++;
// document.writeln("<p>" + result + "</p>");

// result = -result;
// document.writeln("<p>" + result + "</p>");
// Operasi Perbandingan
// let result = 5 == "5";
// document.writeln("<p>" + result + "</p>");

// result = 5 === "5";
// document.writeln("<p>" + result + "</p>");

// result = 5 > "10";
// document.writeln("<p>" + result + "</p>");

// result = 5 < "10";
// document.writeln("<p>" + result + "</p>");
// Operator Logika
// const nilaiUjian = 70;
// const nilaiAbsensi = 70;

// const lulusUjian = nilaiUjian > 75;
// const lulusAbsensi = nilaiAbsensi > 75;

// const lulus = lulusUjian && lulusAbsensi;
// document.writeln("<p>" + lulus + "</p>");
// Console
// console.info("Hello World");
// Mengambil Varible
// const name = "Jeje";
// const template = `Name : ${name}`;
// console.info(template);
// Expression di string template
// const name = "jeje";
// const value = 70;

// const template = `Name : ${name}, Lulus : ${value > 75}`;
// console.info(template);
// Multiline String
// let multilineString = `
// Nama saya adalah Jajang Jamaludin
// Haii
// Juga
// Hemmm
// `;
// document.writeln("<pre>");
// document.writeln(multilineString);
// document.writeln("</pre>");
// Maasalah Tanpa Konversi
// const value1 = "1";
// const value2 = 1;
// const sum = value1 + value2;

// document.writeln(`<p>${sum}</p>`);
// Konversi String ke Number
// document.writeln(`<p>${parseInt("1.1")}</p>`);
// document.writeln(`<p>${parseFloat("1.1")}</p>`);
// document.writeln(`<p>${Number("1.1")}</p>`);
// NaN
// document.writeln(`<p>${parseInt("salah")}</p>`);
// document.writeln(`<p>${parseFloat("1.1text")}</p>`);

// // Number() tidak akan mentolelir kesalahan pada data
// document.writeln(`<p>${Number("1.1ups")}</p>`);
// document.writeln(`<p>${Number("1x")}</p>`);
// document.writeln(`<p>${Number("Not Number")}</p>`);
// Operasi pada NaN
// const value1 = Number("salah");
// const value2 = isNaN("hai");
// // const sum = value1 + value2;

// // document.writeln(`<p>${sum}</p>`);
// console.info(value2);
// Menambah Array
// const names = [];
// names.push("Jajang");
// names.push("Jamaludin", "JJ");

// console.info(names);
// Operasi di Array
// const names = [];
// names.push("Jajang");
// names.push("Jamaludin", "JJ");

// console.table(names);

// names[0] = "aziz";

// console.table(names);
// console.info(names.length);
// Tipe data Object
// Mengubah Property di Object
// const orang = {};

// // menambah atau mengubah
// orang["nama"] = "Jajang";
// orang["alamat"] = "Indonesia";
// orang["umur"] = 22;

// // Menghapus
// // delete orang["umur"];

// console.table(orang);
// Membuat Object dengan Properties
// const orang = {
//     nama: "Jajang J",
//     alamat: "Indonesia",
//     umur: 12,
// };

// console.table(orang);
// Mengakses Property Object
// const orang = {
//     nama: "ajang",
//     alamat: "Brunei",
//     umur: "1",
// };
// console.info(`Nama : ${orang.nama}`);
// console.info(`Alamat : ${orang.alamat}`);
// console.info(`Umur : ${orang.umur}`);
// If Expression
// const examValue = 70;

// if (examValue > 80) {
//     document.writeln("<p>Good Job</p>");
// }
// Else Expression
// const examValue = 70;

// if (examValue > 80) {
//     document.writeln("<p>Good Job</p>");
// } else {
//     document.writeln("<p>Try Again Next Day</p>");
// }
// Else If Expression
// const examValue = 50;

// if (examValue > 80) {
//     document.writeln("<p>Good Job</p>");
// } else if (examValue > 60) {
//     document.writeln("<p>Not Bad</p>");
// } else {
//     document.writeln("<p>Try Again Next Day</p>");
// }
// Alert
// alert("Hello World");
// Prompt
// const name = prompt("Siapa Nama Anda?");
// alert(`Hello ${name}`);
// Confirm
// const masuk = confirm("Anda yakin mau masuk?");
// if (masuk) {
//     const name = prompt("Siapa Nama Anda?");
//     alert(`Hello ${name}`);
// } else {
//     alert("Bye");
// }
// Undefined Variable 
// let name;
// if (name === undefined) {
//     alert("UNDEFINED");
// } else {
//     alert("DEFINED");
// }
// Undefined Array Value
// const names = ["Jajang", "Jamaludin"];

// if (names[2] === undefined) {
//     alert("Hello World");
// } else {
//     alert(`Hello ${names[2]}`);
// }
// Undefined Object Property
// let person = {};

// if (person.name === undefined) {
//     alert("Hello World");
// } else {
//     alert(`Hello ${person.name}`)
// }
// Null dan Undefined
// let firstName = null;

// if (firstName === undefined) {
//     alert("Hello Undefined");
// } else if (firstName === null) {
//     alert("Hello Null");
// } else {
//     alert(`Hello ${firstName}`);
// }
// Switch Statement
// var nilai = A;
// switch (nilai) {
//     case "A":
//         document.writeln("<p>Wow Anda lulus dengan baik</p>");
//         break;
//     case "B":
//     case "C":
//         document.writeln("<p>Anda Lulus</p>");
//         break;
//     case "D":
//         document.writeln("<p>Anda Tidak Lulus</p>");
//         break;
//     default:
//         document.writeln("<p>Mungkin anda salah jurusan</p>");
// }
// var jawab = prompt("Kamu beruntung! Silahakn pilih hadiahmu dengan memasukan A sampai D");
// var nilai = "";

// switch (jawab) {
//     case "A":
//         nilai = "Anda Lulus dengan Baik";
//         break;
//     case "B":
//         nilai = "Anda Lulus";
//         break;
//     case "C":
//         nilai = "Anda Lulus";
//         break;
//     case "D":
//         nilai = "Anda Tidak Lulus";
//         break;
//     default:
//         document.write("<p>Opps! anda salah pilih jurusan</p>");
// }

// if (nilai === "") {
//     document.write("<p>Kamu gagal lulus</p>");
// } else {
//     document.write("<h2>Selamat kamu mendapatkan " + nilai + "</h2>");
// }
// Operator Typeof
// let data = 100;

// const typeData = typeof data;
// document.writeln(`<p>${typeData}</p>`);
// In Operator
// const person = {
//     firstName: "Jajang",
//     lastName: "Jamal"
// }
// const result = "firstName" in person; //true
// document.writeln(`<p>${result}</p>`)
// In Operator Undefined/Null Porperty
// const person = {
//     lastName: undefined
// }
// const result = "lastName" in person; //true
// document.writeln(`<p>${result}</p>`);

// const names = [null, "jeje", null];
// const nameResult = 0 in names; //true
// document.writeln(`<p>${nameResult}</p>`)
// Ternary Operator
// const nilai = 75;
// const ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi";

// document.writeln(`<p>${ucapan}</p>`);
// Tanpa Nullish Coalesing Operator
// let parameter;

// let data = parameter;
// if (data === undefined || data == null) {
//     data = "Nilai Default";
// }
// alert(data);
// Nullish Coalesing Operator
// let parameter;
// let data = parameter ?? "Nilai Default";

// alert(data);
// Pengecekan Menggunakan If
// let person = {};

// let say;
// if (person.address !== undefined && person.address !== null) {
//     say = person.address.country;
// }
// alert(say);
// Optional Chaining
// let person;
// alert(person?.address?.country);
// Falsy dan truthy
// const data = NaN;

// if (data) {
//     document.writeln("TRUE")
// } else {
//     document.writeln("FALSE");
// }
// Operator OR || truht
// console.info("hello" || ''); //hello
// console.info("" || []); //[]
// console.info("0" || "NOL") //0
// console.info(0 || "NOL") //NOL
// console.info(null || "NULL") //NULL
// console.info(undefined || "UNDEFINED"); //NULL
// Operator AND && Falsy
// console.info("hello" && ''); //hello
// console.info("" && []); //[]
// console.info("0" && "NOL") //0
// console.info(0 && "NOL") //NOL
// console.info(null && "NULL") //NULL
// console.info(undefined && "UNDEFINED"); //NULL
// Perulangan dengan kondisi
// let counter = 1;
// for (; counter <= 20;) {
//     document.writeln(`<p>Perulangan ke ${counter}</p>`)
//     counter++;
// }
// Perulangan dengan Init Statement
// for (let counter = 1; counter <= 10;) {
//     document.writeln(`<p>Perulangan ke ${counter}</p>`)
//     counter++;
// }
// Perulangan dengan Post Statement
// for (let counter = 1; counter <= 10; counter++) {
//     document.writeln(`<p>Perulangan ke ${counter}</p>`);
// }
// While Loop
// let counter = 1
// while (counter <= 10) {
//     document.writeln(`<p>Perulangan ke ${counter}</p>`)
//     counter++
// }
// Do While Loop
// let counter = 1;
// do {
//     document.writeln(`<p>Perulangan ke ${counter}</p>`);
//     counter++
// } while (counter <= 10);
// Break
// let counter = 1;
// while (true) {
//     document.writeln(`<p>Perulangan ke ${counter}</p>`)
//     counter++;

//     if (counter > 10) {
//         break;
//     }
// }
// Continue
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     document.writeln(`<p>Perulangan Ganjil ${i}</p>`);
// }
// Label
// Loopi:
// for (let i = 0; i < 100; i++) {
//     Loopj:
//     for (let j = 0; j < 10; j++) {
//         console.info(`${i} - ${j}`);
//     }
// }
// Countinue atau Break di Label
// Loopi:
// for (let i = 0; i < 10; i++) {
//     Loopj:
//     for (let j = 0; j < 100; j++) {
//         if (j > 10) {
//             continue Loopi;
//         }
//         document.writeln(`<p>${i}-${j}</p>`);
//     }
// }
// For In di Object
// const person = {
//     firstName: "Eko",
//     middleName: "Jajang",
//     lastName: "J",
// };
// for (const property in person) {
//     document.writeln(`<p>Property ${property} : ${person[property]}</p>`);
// }
// For in dalam Array
// const names = ["jajang", "jeamale", "JJ"];

// for (const index in names) {
//     document.writeln(`<p>Index ${index} : ${names[index]}</p>`);
// }