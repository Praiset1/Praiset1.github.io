/*validate Register Form 
$("#registerForm").validate({
rules:{
        name:{
            required:true,
            minlength:3,
            accept:"[a-zA-Z]+"
        },
     
     password:{
         required:true,
         minlength:5,
         maxlength:20
     },
    
    email:{
        required:true,
        
    }
    },
   messages:{
       required:"Please Enter Your Name!",
       minlength:"Your Name must contain letters only!"
   },
   password:{
       required:"Please Provide Your password!",
       minlength:"Your password must be atleast 5 characters long!"
   },
   
   email:{
    required:"Please Enter Your email!", 
    username:"Please Enter valid eamil!"  
   }
});

//validate Login Form
$("#loginForm").validate({
    rules:{
        email:{
            required:true,
            
            

     },
     password:{
         required:true,
     }

    },
    messages:{
    
email:{
    required:"please Enter Email!",
    email:"Please Enter valid Email!"
},
    
    

    
    
     password:{
         required:"Please provide Your Password!"
     }
    }
});/*
function myFunction(){
    document.getElementById("myDropdown").classList.toggle(show);
}
window.onclick = function(event){
    if (!event.target.matches('.dropbtn'))

{
    var myDropdown=
    document.getElementsByClassName("dropdown-contents");
    var i;
    for(i = 0;i < dropdowns.length; i++) 
    {
        var openDropdown = dropdowns[i];
        (openDropdown.classList.contains('show'))
        {
openDropdown.classList.remove('show');

/*