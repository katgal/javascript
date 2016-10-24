
document.addEventListener("DOMContentLoaded", function () {


function Validation(form) {
  this.form = form;
  this.inputs = this.form.querySelectorAll('input');
};

Validation.prototype.validateInput = function (input) {
  var pass2 = document.querySelector('#pass2').value;

  if (input.name === 'email' && input.value.indexOf('@') === -1) {
    alert('invalid email');
    return false;
  }

  if (input.name === 'name' && input.value.length < 5) {
    alert('invalid name');
    return false;
  }

  if (input.name === 'surname' && input.value.length < 5) {
    alert('invalid surname');
    return false;
  }

  if (input.name === 'pass1' && input.value !== pass2 && input.value !== '') {
    alert('invalid password');
    return false;
  }

  if (input.type === 'checkbox' && !input.checked) {
    alert('invalid checked');
    return false;
  }

  return true;
};

Validation.prototype.bindSubmitEvent = function () {
  this.form.addEventListener('submit', this.handleSubmitEvent.bind(this));
};

Validation.prototype.handleSubmitEvent = function (e) {
  for (var i = 0; i < this.inputs.length; i++) {
    if (!this.validateInput(this.inputs[i])) {
      e.preventDefault();
      break;
    }
  }
};

Validation.prototype.init = function () {
  this.bindSubmitEvent();
};

var validator = new Validation(document.querySelector('form'));
validator.init();
});


/*
var formTheOne = document.querySelector('.form-group');
    var emailF = document.querySelector('#email');
    var nameF = document.querySelector('#name');
    var surNameF = document.querySelector('#surname');
    var pass1F = document.querySelector('#pass1');
    var pass2F = document.querySelector('#pass2');
    var agreeF = document.querySelector('#agree');
    var submitF = document.querySelector('.btn');

    submitF.addEventListener('click', function(event) {
        if ((emailF.value.indexOf('@')== -1)||(nameF.value.length <5)||(surNameF.value.length <5)
        || (pass1F.value!=pass2F.value) || (agreeF.checked!=true)
            || (pass1F.value.length<5)  // dodatk.: hasło min 5 znaków
            || ( /^[a-zA-Z]+$/.test(pass1F.value)) // dodatk.: same litery - warunek d o zablokowania
            || (/^[0-9]+$/.test(pass1F.value)) //dodatk.: same cyfry - warunek d o zablokowania (negacja to !/....)
        )

             {
    //submitF.addEventListener('click', function(event) {
            event.preventDefault();
            alert("please fill the form correctly");
        }
        })
});
*/
