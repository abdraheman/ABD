let time = document.querySelector('.time');
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
function checkHours(i){
    if (i >12){
        i = i % 12
        document.querySelector('.type-time').innerHTML = 'PM'
    }else{
        document.querySelector('.type-time').innerHTML = 'AM'
    }
    i = i ? i : 12;
    return i

}  
function currentTime(){
    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();
    h= checkHours(h)
    h = checkTime(h)
    m = checkTime(m);
    time.innerHTML = h + ":" + m
    setTimeout(() => {
        currentTime()
    }, 1000);
}
currentTime()

function sendMail(){
    let params = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val(),
    };
    let serviceID = "service_w74s3gz"
    let templateID = "template_2q41sos"

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            $('#name').val("")
            $('#email').val(""),
            $('#message').val(""),
            console.log(res)
        })
        .catch((err) => console.log(err))
}

function validateName(name) {
    return name.trim() !== '' && name.length >= 2;
}

function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

$('.contact .cta-p').on('click', function(e){
    e.preventDefault()
    let name = $('#name').val();
    let email = $('#email').val();

    if (validateName(name) && validateEmail(email)) {
        sendMail();
    }if(!validateName(name)){
        $('#name').addClass('inputIncorrect')
    }else{
        $('#name').removeClass('inputIncorrect')
    }
    if(!validateEmail(email)){
        $('#email').addClass('inputIncorrect')
    }else{
        $('#email').removeClass('inputIncorrect')
    }
})