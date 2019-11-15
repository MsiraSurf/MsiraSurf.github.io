



document.getElementById("btnSubmit").onclick = function sendEmail(){
    var txtArea = document.getElementById("message1").value; 
    var txtEmail = document.getElementById("mc-email").value;
    
    Email.send({
       Host: "smtp.gmail.com", 
       Username: "luthandopulence@gmail.com", 
       Password: "opulence",
       To: "info@opulencemg.com",
       From: "luthandopulence@gmail.com",
       Subject: "Message From Website Visitor",
       Body: txtArea + "\n" + "From: "+ txtEmail
    }).then(
        message => alert("mail sent successfully")
    );
}