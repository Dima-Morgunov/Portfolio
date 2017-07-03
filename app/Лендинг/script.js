window.onload = function(){

  var email = document.querySelector('#email');
  var sname = document.querySelector('#sname')
  var name = document.querySelector('#name');
  var coment = document.querySelector('#coment')


  document.querySelector('#send').onclick = function(){

   var params = 'email=' + email.value + '&' + 'name=' + name.value + '&' + 'sname=' + sname.value + '&' + 'coment=' + coment.value;
  
   if (name.value == '') {
    alert ('Поле \"Имя"\ должно быть заполнено!')
  }
  else if (sname.value == '') {
    alert('Поле \"Фамилия"\ должно быть заполнено!')
  }
  //else if (sname.value == '' && name.value == '') {
  //  
  //}
  
   AjaxPost(params);
  }
}  
  function AjaxPost(params){
    var request = new XMLHttpRequest();


    request.onreadystatechange = function(){
      if(request.readyState == 4 && request.status == 200 && name.value != '' || sname.value != ''){
        document.querySelector('#feedback_form').style.display = 'none';
        document.querySelector('#postform').style.display = 'block';
      
        
      }
    }

    request.open('POST', 'handler_script.php');
    request.setRequestHeader('Contnt-Type', 'application/x-www-form-urlcoded');
    request.send();
}
