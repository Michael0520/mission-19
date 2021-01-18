const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
  input.addEventListener('input',()=>{
    if (input.checkValidity()) {
      input.classList.add('valid')
      input.classList.remove('invalid')
    }else{
      inputs.classList.remove('valid')
      inputs.classList.add('invalid')
      if (input.validity.valueMissing) {
        input.setCustomValidity('此欄位必填，請重新確認')
        return
      }
      if (input.validity.typeMismatch) {
        inputs.setCustomValidity('格式錯誤，請重新確認')
      }
    }
  })
});

// 參數帶入 input ，length <0 ,但為什麼沒有反應呢？
const checkLength = ((input)=>{
  if (input.length < 0) {
    alert('error')
  }
})

// 這裡應該怎麼帶參數呢？

const checkPassword = ((password,password2)=>{
  if (password.value !== password2.value) {
    alert('error')
  }
})