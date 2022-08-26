function like(){
    alert("ninja was liked");
}

function login(btn){
    
    if(btn.innerText == 'Login'){
        btn.innerText = "Logout";
    } else {
        btn.innerText = "Login";
    }
    

}

function removeBtn(btn){
    btn.remove();
}