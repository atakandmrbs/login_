
var form=document.getElementById('form');

form.addEventListener('mousemove', (e) =>{

  var x=(window.innerWidth / 2 - e.pageX) /12;
  var y=(window.innerHeight / 2 - e.pageY) /12;

  form.style.transform= 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';

});


form.addEventListener('mouseleave', function(){
  form.style.transform='rotateX(0deg) rotateY(0deg)'

  
});



function validateForm() {
    
    let userNameValue =document.getElementById('username').value
    let passwordValue=document.getElementById('password').value

   if(userNameValue=="atakan" && passwordValue=='697845'){
   alert('giriş başarılı');
  }
  else if(userNameValue !== "atakan" && passwordValue == '697845'){
   alert('kullanıcı adı hatalı');}
   else if(userNameValue == "atakan" && passwordValue !== '697845'){
   alert('şifre hatalı');}
   else
   alert('giriş başarısız');
   
   return false;

   }
   
















