function name(url,data) {
    this.url=url
    this.data=data
    async function f() {
        await fetch(`${this.url}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({"email":`${this.data}`})
        })
        .then(Response=>console.log(Response))
        .catch(error=>console.log(error))
    }
    f()
}

name("http://127.0.0.1:5000/users/emails","fransic")
