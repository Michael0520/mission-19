const form = document.getElementById('form')
const username =document.getElementById('username')
const email =document.getElementById('email')
const password =document.getElementById('password')
const confirmPassword =document.getElementById('confirmPassword')


//Show input error message

const showError = ((input,message)=>{
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
})

//Show success outline
const showSuccess = (input=>{
  const formControl = input.parentElement
  formControl.className='form-control success'
})

// Check Email is valid
const isValidEmail = (email=>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
})

// Check require

const checkRequired = (inputArr=>{
  inputArr.forEach((input=>{
    if(input.value.trim() === '' ){
      showError(input,`${input.id} is required`)
    }else{
      showSuccess(input)
    }
  }))
})

// Event Listener
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  // checkRequired(username)
  // checkRequired(email)
  // checkRequired(password)
  // checkRequired(confirmPassword)
  checkRequired([username,email,password,confirmPassword])

})