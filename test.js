const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const checkButton = document.getElementById("sub");
const message = document.getElementById("message");

//array of peoples names
// const students = [
//     "Lee",
//     "Tumelo",
//     "Sipho",
//     "Kyu",
//     "Sanjay"
// ]

checkButton.addEventListener("click", function () {
  // if (input1.value == "" || input2.value == "") {
  //   alert("Please fill in all fields");
  // } else {
  //   let bmi = (input2.value / ((input1.value * input1.value) / 10000)).toFixed(2);

  //   if (bmi < 18.6) {return message.innerHTML = "Under weight: " + bmi}

  //       else if (bmi >= 18.6 && bmi < 24.9) return message.innerHTML = "Normal weight: " + bmi

  //       else return message.innerHTML = "Over weight: " + bmi

  // }

  if (input1.value == "" || input2.value == "") {
    alert("please fill in inputs");
  } else {
    let bmi = (input2.value / ((input1.value * input1.value) / 10000)).toFixed(
      2
    );
    if (bmi < 18.6) {
      return (message.innerHTML = "Under weight: " + bmi);
    } else if (bmi >= 18.6 && bmi < 24.9)
      return (message.innerHTML = "Normal weight: " + bmi);
    else return (message.innerHTML = "Over weight: " + bmi);
  }

  // let getName = 0

  // while(getName < students.length){

  //     if(input1.value == "Lee" && students[getName].includes("Lee")){
  //         return message.innerText =" Hello " + students[getName]
  //     }else if(input1.value == "Tumelo" && students[getName].includes("Tumelo")){
  //         return message.innerText =" Hello " + students[getName]
  //     }else if(input1.value == "Sipho" && students[getName].includes("Sipho")){
  //         return message.innerText =" Hello " + students[getName]
  //     }else if(input1.value == "Kyu" && students[getName].includes("Kyu")){
  //         return message.innerText =" Hello " + students[getName]
  //     }else if(input1.value == "Sanjay" && students[getName].includes("Sanjay")){
  //         return message.innerText =" Hello " + students[getName]
  //     }else{
  //         return message.innerText = "not included"
  //     }

  // }

  // getName++
});
