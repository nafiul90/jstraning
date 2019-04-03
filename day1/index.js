console.log(window);
console.log(document.getElementById("headline"));
console.log(document.getElementsByClassName("para"));

function buttonOnclickHandle() {
  var text = document.getElementById("headline").innerHTML;
  //   var text2 = "bangla";

  if (text == "Bangla") {
    document.getElementById("headline").innerHTML = "Hello";
  } else {
    document.getElementById("headline").innerHTML = "Bangla";
  }
  var div = document.getElementById("div");
  var para = document.createElement("h1");
  para.innerText = "this is a heading created by html";
  div.appendChild(para);

  div.style.color = "red";

  console.log("button clicked");
}

// function fun(text, fun2) {
//   console.log(text);

//   fun2("helo");
// }

// fun("this is a simple text", a => console.log(a));

// var func = a => console.log(a);

// func(10);
