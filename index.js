// tab
      $( function() {
    $( "#tabs" ).tabs();
  } );

  let row3 = document.getElementById('row3')
  let row33 = document.getElementById('row33')
  let row333 = document.getElementById('row333')
  let viewmore = document.getElementById('vmore')

viewmore.addEventListener('click',()=>{
  row3.style.display = "block";
  row33.style.display = "block";
  row333.style.display = "block";
})

// parallax 

document.addEventListener('mousemove', parallax);
    function parallax(e) {
        document.querySelectorAll('.layer').forEach((move)=>{
            let movingValue = move.getAttribute('data-value')
            let x = (e.clientX *movingValue) /100
            let y = (e.clientY *movingValue) /100

            move.style.transform = 'translateX('+x+'px) translateY('+y+'px)'
        })
      }

// loader

let loaderdisplay = document.querySelector('.loaderdisplay')
let website = document.querySelector('#website')
website.style.display='none';

setTimeout(() => {
  website.style.display='block';
  loaderdisplay.style.display='none';
}, 4000);

// email js


let formbtn =document.getElementById("formbtn");
let formname = document.getElementById("formname");
let email = document.getElementById("formemail");
let subject =  document.getElementById("formsub");
let message =  document.getElementById("formmsg");

formbtn.addEventListener("click",()=>{
  if(formname.value=='',email.value==''){
    alert('Name & Email cannot be blank.')
  }
  else{
    emailjs.send("service_wbi1sia","template_7rzh3xf",{
    from_name: formname.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
    }).then(()=>{
        alert("Your message send successfully ☺")
        location.reload()
    })
  }
  
})

