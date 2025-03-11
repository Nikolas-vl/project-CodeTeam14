import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    closeBtn: document.querySelector('.btn-close-modal'),
    modal: document.querySelector('.modal-overlay'),
    form: document.querySelector('.work-form'),
    label: document.querySelector('.label-work'),
    emailInput: document.querySelector('#user-email'),
    btnSend: document.querySelector('.btn-work'),
}

function hiddenModal() {
    refs.modal.classList.add('hidden');
}
function showModal() {
    refs.modal.classList.remove('hidden');
}
function addError(elem) {
    elem.textContent = 'Invalid email, try again';
    elem.classList.add('error');
    elem.classList.remove('correct');
}
function addCorrect(elem) {
    elem.textContent = 'Success!';
    elem.classList.add('correct');
    elem.classList.remove('error');
}

async function submitHandler(ev) {
    ev.preventDefault();
    ev.stopImmediatePropagation()

    const formData = new FormData(refs.form);
    const email = formData.get('user-email');
    const comment = formData.get('user-comment');

    if (!email || !comment) {
        iziToast.error({
            message: "Email and comment are required!",
            timeout: 5000, 
            position: 'topRight',
        });
        return; 
    }

    const data = { email, comment };

    try {
        await postUserData(data);

        refs.label.textContent = '';
        showModal();
        refs.form.reset(); 
    } catch (error) {
        iziToast.error({
            message: "Something went wrong",
            timeout: 5000, 
            position: 'topRight',
        });
    }
}

async function postUserData(data) {
    const url = 'https://portfolio-js.b.goit.study/api/requests'; 
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        iziToast.error({
            message: "Something went wrong. Try again",
            timeout: 5000, 
            position: 'topRight',
        });
        throw error;
    }
}

refs.closeBtn.addEventListener('click', () => {
    hiddenModal();
});

refs.form.addEventListener('submit', submitHandler);

refs.form.addEventListener('input', ev => {
    const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    ;

    ev.target.style.color = '#fafafa'; 
    const data = new FormData(refs.form);
    const email = data.get('user-email'); 

    if (ev.target.name === 'user-email') {
        if (pattern.test(email)) {
            addCorrect(refs.label);
            ev.target.style.borderColor = '#3cbc81';
        } else {
            addError(refs.label);
            ev.target.style.borderColor = '#e74a3b';
        }

        if(email.trim() === '' || !pattern.test(email)){
            refs.btnSend.disabled = true;
        } else {
            refs.btnSend.disabled = false;
        }
    }
});

refs.emailInput.addEventListener('blur', ev => {
    ev.target.classList.remove('correct', 'error');
    ev.target.style.borderColor ='';
    refs.label.textContent = '';
})


