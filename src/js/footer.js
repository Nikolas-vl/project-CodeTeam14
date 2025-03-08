const refs = {
    closeBtn: document.querySelector('.btn-close-modal'),
    modal: document.querySelector('.modal-overlay'),
    form: document.querySelector('.work-form'),
    label: document.querySelector('.label-work'),
}

function hiddenModal() {
    refs.modal.classList.add('hidden');
}

function showModal() {
    refs.modal.classList.remove('hidden');
}

refs.closeBtn.addEventListener('click', () => {
    hiddenModal();
});


refs.form.addEventListener('submit', ev => {
    ev.preventDefault();

    refs.label.textContent = '';
    showModal();
    refs.form.reset(); 
});

refs.form.addEventListener('input', ev => {
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    ev.target.style.color = '#fafafa'; 
    const data = new FormData(refs.form);
    const email = data.get('user-email'); 
    const comment = data.get('user-comment');

    if (ev.target.name === 'user-email') {
        if (pattern.test(email)) {
            refs.label.textContent = 'Success!';
            refs.label.classList.add('correct');
            refs.label.classList.remove('error');
        } else {
            refs.label.textContent = 'Invalid email, try again';
            refs.label.classList.add('error');
            refs.label.classList.remove('correct');
        }
    }
    
})