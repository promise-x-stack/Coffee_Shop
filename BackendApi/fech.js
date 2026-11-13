/*fetch('http://127.0.0.1:5000/users/emails',{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({"email":"promismukunya@gmail.com"})
})
.then(res=>console.log(res))
.catch(err=>console.log(err))*/

fetch("http://127.0.0.1:5000/get/users")
.then(response=>response.json())
.then(data=>{
    console.log(data.email)
})