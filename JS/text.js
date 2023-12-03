$(document).ready(function(){
    const eye=document.querySelector('.eye')
    const pswd=document.querySelector('#password')
    let i=0
    eye.addEventListener('click',function(){
        i++
        eye.src='./images/open.png'
        pswd.type='text'        
        if(i%2===0){
            i=0
        eye.src='./images/close.png'
        pswd.type='password'     
        }
    })

        // 获取需要的标签
        const sign=document.querySelector('.sign')
        let Arr=localStorage.getItem('UserCenter')
        let arr=JSON.parse(Arr)
        let uname=document.querySelector('[name=username]')
        let upassword=document.querySelector('[name=password]')
        let users = localStorage.getItem("UserCenter")||[]
// 登录
sign.addEventListener('click',function(e) {
  // 阻止默认行为
  e.preventDefault?e.preventDefault():e.returnValue = false
  console.log(users)
  // 获取本地存储的数据
  if (users.length===0) {
                let tsname=document.querySelector('[for=username]')
                let tspwd=document.querySelector('[for=password]')
                tsname.innerHTML='密码或用户名错误！'
                tsname.style.color='red' 
                return falses
        }
  let userArr = JSON.parse(users)
  // console.log(userArr, typeof(userArr))
    let sel=0
  // 遍历数组，判断账号密码是否正确
  for(let i = 0; i < userArr.length; i++) {
    // 获取遍历用户
    let user = userArr[i]
    // 判断账号密码是否正确
    if(user.username === uname.value && user.password === upassword.value) {
        let xuhua=document.querySelector(".xuhua")
        let xuhua1=document.querySelector(".loadering")
        xuhua.style.filter='blur(10px)'
        xuhua1.style.display='block'
        sel=1
      sessionStorage.setItem("login", JSON.stringify(user))
      setTimeout(jump,1000)
        function jump(){
        xuhua1.style.display='none'
        location.href = "index.html"
      } 
      return
    }
  }
  // 提示账号或者密码有误
        if (sel===0||userArr==='') {
                let tsname=document.querySelector('[for=username]')
                let tspwd=document.querySelector('[for=password]')
                tsname.innerHTML='密码或用户名错误！'
                tsname.style.color='red' 
        }
})
})