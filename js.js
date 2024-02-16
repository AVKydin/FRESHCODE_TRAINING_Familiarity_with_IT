const body = document.getElementById("body")
const modalErr = document.createElement('div');
const text = document.createElement('p');
const button = document.createElement('button');
const LearnMore = document.getElementById('LearnMore');

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
    elmts.name.value = ''
    elmts.email.value = ''
}

button.onclick = () =>{
    modalErr.style.display = 'none'
}
const learn_more = document.getElementById('lm')

LearnMore.onclick = () =>{
    learn_more.style.display = 'flex'
}
const modal = document.getElementById('modal')

modal.onclick = () =>{
    learn_more.style.display = 'none'
}

const LearnMore2 = document.getElementById('LearnMore2');

LearnMore2.onclick = () =>{
    learn_more.style.display = 'flex'
}

const support = document.getElementById('support');
const support2 = document.getElementById('support2');
const supp = document.getElementById('supp');
const modalSupp = document.getElementById('modalSupp');

support.onclick = () =>{
    supp.style.display = 'flex'
}

support2.onclick = () =>{
    supp.style.display = 'flex'
}

modalSupp.onclick = () =>{
    supp.style.display = 'none'
}
