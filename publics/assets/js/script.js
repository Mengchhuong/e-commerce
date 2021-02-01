
document.getElementById('signup').addEventListener('click', result =>{
    result.preventDefault() //to prevent link to another url or page
    const form = new FormData(document.querySelector("form"))
    let dataSubmit={}
    for (const pair of form) {
        console.log(pair)
        dataSubmit[pair[0]]= pair[1]
    }
    // console.log(dataSubmit)
    var pw = dataSubmit['password'];
    if(pw == "" || pw.length < 3 || pw.length > 15){
        if(pw==""){
            document.getElementById("message").innerHTML = "Fill the password please!";
        }
        else if (pw.length<3){
            document.getElementById("message").innerHTML = "Password must be at least 3 characters";
        }
        else if(pw.length>15){
            document.getElementById("message").innerHTML = "Password must not be exceed 15 characters";
        }
    }
    else{
        if (dataSubmit.confirm_password==dataSubmit.password){ 
            axios.post("http://localhost:3000/register/",dataSubmit).then(result=>{
                // document.body.innerHTML=result.data
                // history.pushState(result.data,"signin","/signin")
                window.location.pathname="/signin"
            }).catch(err=>{
                console.log("error")
            })
        }
        else {
            let message=document.createElement("div").innerHTML="password is incorrect"
            document.body.append(message)
        }

    }
    
})



  