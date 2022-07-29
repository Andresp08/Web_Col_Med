function sendEmail() {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'andrespardo@unisangil.edu.co',
    Password: 'gbmasmhgkgmzalzz',
    To: 'andresfp292@gmail.com',
    From: document.getElementById('email').value,
    Subject: 'Contacto desde ColMedSantander.com',
    Body: document.getElementById('mensaje').value,
  }).then((message) => alert(message));
}
