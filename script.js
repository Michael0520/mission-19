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
const checkEmail = (input=>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
})

// Check require

const checkRequired = (inputArr=>{
  inputArr.forEach((input=>{
    if(input.value.trim() === '' ){
      showError(input,`${getFiredName(input)} is required`)
    }else{
      showSuccess(input)
    }
  }))
})

// Check input length

const checkLength = ((input,min,max)=>{
  if (input.value.length < min ) {
    showError(input,`${getFiredName(input)} must be at least ${min}`)
  }else if (input.value.length > max) {
    showError(input,`${getFiredName(input)} must be less than ${max} characters`)
  }else{
    showSuccess(input)
  }
})

// Get fieldname
const getFiredName = (input=>{
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
})


// Event Listener
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  checkRequired([username,email,password,confirmPassword])
  checkLength(username,3,15)
  checkLength(password,6,25)
  checkEmail(email)
})