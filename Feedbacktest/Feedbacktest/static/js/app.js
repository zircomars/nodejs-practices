const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  //console.log('submit clicked');

  let formData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
  }

  console.log(formData);

  //muodostaa json ja vastaanottaa palaute formaatin mikälie ja siitä lähettää kuin eteenpäin, mikäli muodostuu virhe (näyttää viestin)
  /*
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success')
    {
      alert('Email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }
    else 
    {
      alert('Something went wrong!');
    }
  }

  xhr.send(JSON.stringify(formData));*/

})

//tämä tekee, kun lomaketta lähetetään, se päivittää sivun takaisin oletuksena (tyhjä lomake)