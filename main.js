onload = () =>{
  document.body.classList.remove("container");
};

let iq = localStorage.getItem('iq') || 150;

function guessRiddle1()
{
  let input1 = document.getElementById('firstRowInput').value;
  let input2 = document.getElementById('secondRowInput').value;

  console.log(input1);
  console.log(input2);

  if(input1 === "HPPY" && input2 === "BIrThDy")
  {
    window.location.href = "riddle2.html";
  }
  else{
    iq -= 20;
    localStorage.setItem('iq',iq);
    alert("Current IQ is: " + iq);
  }
}

function guessRiddle2()
{
  let input1 = document.getElementById('firstRowInput').value;

  console.log(input1);

  if(input1 === "short")
  {
    window.location.href = "riddle3.html";
  }
  else{
    iq -= 20;
    localStorage.setItem('iq',iq);
    alert("Current IQ is: " + iq);
  }
}

function guessRiddle3()
{
  let input1 = document.getElementById('firstRowInput').value;

  console.log(input1);

  if(input1 === "goblin")
  {
    window.location.href = "riddle4.html";
  }
  else{
    iq -= 20;
    localStorage.setItem('iq',iq);
    alert("Current IQ is: " + iq);
  }
}

function guessRiddle4()
{
  let input1 = document.getElementById('firstRowInput').value;

  console.log(input1);

  if(input1 === "HPPY BIrThDy short goblin")
  {
    window.location.href = "wish.html";
  }
  else{
    iq -= 20;
    localStorage.setItem('iq',iq);
    alert("Current IQ is: " + iq);
  }
}