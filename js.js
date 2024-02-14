const body = document.getElementById("body")
const modalErr = document.createElement('div');
const text = document.createElement('p');
const button = document.createElement('button');
function checkForm(elmts) {
    event.preventDefault()
    const userName = elmts.name.value;
    const userEmail = elmts.email.value;


    if (!userName || !userEmail){
        text.innerText = "Заповніть всі поля! Слава Україні!"
    }
    if (userName && userEmail){
        text.innerText = `${userName}! Ви підписалися на наші новини і будете їх отримувати на ${userEmail}! Слава Україні!`;
    }

    modalErr.classList.add('err')
    modalErr.style.display = 'flex'
    modalErr.append(text)
    button.classList.add('errButton')
    button.innerText = "Героям слава!"
    modalErr.append(button)
    body.append(modalErr)
}

button.onclick = () =>{
    modalErr.style.display = 'none'
}
