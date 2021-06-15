window.addEventListener('load', () =>{

       localStorage.setItem("index", 0);
       var index = 0;

    document.querySelector('#form').addEventListener('submit', () => { 
       let userName = document.querySelector("#contact-name").value;
       let userPhone = document.querySelector("#contact-phone").value;
       let userEmail = document.querySelector("#contact-email").value;
       let userId  = Math.random() + userName[2];
       
       let user = {
           id: userId,
           name: userName,
           phone: userPhone,
           email: userEmail
       }
       if(userName || userPhone || userEmail != ""){
       localStorage.setItem(user.id, JSON.stringify(user));
        }
    })
    const contacts = document.querySelector("#contacts");

    for (let i = 0; i < localStorage.length; i++) { 
        let key = localStorage.key(i);
            if(key != 'index'){
                index++;
                let user = JSON.parse(localStorage[key]);
                let name = document.createElement("p");
                name.setAttribute('class', `userName${index}`);
                let phone = document.createElement("p");
                phone.setAttribute('class', `userPhone${index}`);
                let email = document.createElement("p");
                email.setAttribute('class', `userEmail${index}`);
                let icon = document.createElement('img');
                icon.setAttribute('src', './img/delete_black_24dp.svg');
                icon.setAttribute('class', `img ${index}`);
                let userContainer = document.createElement("div");
                name.innerHTML = user.name;
                phone.innerHTML = user.phone;
                email.innerHTML = user.email,
                userContainer.append(name);
                userContainer.append(phone);
                userContainer.append(email);
                userContainer.append(icon); 
            
                userContainer.setAttribute('class', `container${index}`);
                userContainer.setAttribute('id', user.id);
                contacts.append(userContainer);
                localStorage.setItem("index", index);
        }
       
        
    }

    let icons = document.querySelectorAll('.img');
    icons.forEach(icon=>{
         icon.addEventListener('mouseover', () => {
             let classs = icon.getAttribute('class').slice(4);

             document.querySelector(`.userName${classs}`).style.textDecoration = "line-through";
             document.querySelector(`.userPhone${classs}`).style.textDecoration = "line-through";
             document.querySelector(`.userEmail${classs}`).style.textDecoration = "line-through";
     
         })
         icon.addEventListener('mouseleave', () => {
            let classs = icon.getAttribute('class').slice(4);
             document.querySelector(`.userName${classs}`).style.textDecoration = "none";
             document.querySelector(`.userPhone${classs}`).style.textDecoration = "none";
             document.querySelector(`.userEmail${classs}`).style.textDecoration = "none";
     
         })

         icon.addEventListener('click', () => {
            let classs = icon.getAttribute('class').slice(4);
            let id = document.querySelector(`.container${classs}`).getAttribute('id');
            localStorage.removeItem(id);
            window.location.reload();
         })
     })  
});

