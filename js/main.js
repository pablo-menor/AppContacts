window.addEventListener('load', () =>{

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
     
       localStorage.setItem(user.id, JSON.stringify(user));
    })
    const contacts = document.querySelector("#contacts");

    for (let i = 0; i < localStorage.length; i++) { 
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage[key]);
        let name = document.createElement("p");
        name.setAttribute('class', 'userName');
        let phone = document.createElement("p");
        phone.setAttribute('class', 'userPhone');
        let email = document.createElement("p");
        email.setAttribute('class', 'userEmail');
        let icon = document.createElement('img');
        icon.setAttribute('src', './img/delete_black_24dp.svg');
        icon.setAttribute('id', 'img');
        let userContainer = document.createElement("div");
        name.innerHTML = user.name;
        phone.innerHTML = user.phone;
        email.innerHTML = user.email,
        userContainer.append(name);
        userContainer.append(phone);
        userContainer.append(email);
        userContainer.append(icon);
        
        contacts.append(userContainer);
        
    }

    document.querySelector('#img').addEventListener('mouseover', () => {
        document.querySelector('.userName').style.textDecoration = "line-through";
        document.querySelector('.userPhone').style.textDecoration = "line-through";
        document.querySelector('.userEmail').style.textDecoration = "line-through";

    })
    document.querySelector('#img').addEventListener('mouseleave', () => {
        document.querySelector('.userName').style.textDecoration = "none";
        document.querySelector('.userPhone').style.textDecoration = "none";
        document.querySelector('.userEmail').style.textDecoration = "none";

    })

    

})