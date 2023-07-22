let minus = document.querySelector('.minus img');
let number = document.querySelector('.count_num');
let plus = document.querySelector('.plus img');
function incDec() {
    let count = 1;

    plus.addEventListener('click', () => {
        if (number.innerText < 10) {
            count++;
            number.innerText = count;
        }
    });

    minus.addEventListener('click', () => {
        if (number.innerText <= 1) {
            alert('1 kishi bulishi kk');
            number.innerText = 1;
        } else {
            number.innerText--;
        }
        // if (number.innerText >= 1) {
        //     count--;
        //     number.innerText = count;
        // }
    });
}

incDec();

let inpMonth = document.querySelector('#month');
let inpDay = document.querySelector('#day');
let inpYear = document.querySelector('#year');
let inpHour = document.querySelector('#hour');
let inpMinute = document.querySelector('#minute');
for (let i = 1; i <= 12; i++) {
    let selectOption = document.createElement('option');
    if (i < 10) {
        selectOption.text = `0${i}`;
    } else {
        selectOption.text = i;
    }
    selectOption.value = i;
    inpMonth.appendChild(selectOption);
}
for (let i = 1; i <= 31; i++) {
    let selectOption = document.createElement('option');
    if (i < 10) {
        selectOption.text = `0${i}`;
    } else {
        selectOption.text = i;
    }
    selectOption.value = i;
    inpDay.appendChild(selectOption);
}
for (let i = 1; i <= 12; i++) {
    let selectOption = document.createElement('option');
    if (i < 10) {
        selectOption.text = `0${i}`;
    } else {
        selectOption.text = i;
    }
    selectOption.value = i;
    inpHour.appendChild(selectOption);
}
for (let i = 0; i <= 59; i++) {
    let selectOption = document.createElement('option');
    if (i < 10) {
        selectOption.text = `0${i}`;
    } else {
        selectOption.text = i;
    }
    selectOption.value = i;
    inpMinute.appendChild(selectOption);
}




// input



let { form } = document.forms;
let inpName = document.querySelector('#name');
let inpEmail = document.querySelector('#email');
console.log(form);

let nameStatus = false,
    emailStatus = false



function showError(parentElement, msgElement, message) {
    msgElement.textContent = message;
    parentElement.classList.add('error');
}

function hideError(parentElement, msgElement) {
    msgElement.textContent = '';
    parentElement.classList.remove('error');
}

for (let inp of form) {
    let { name } = inp;
    if (name) {
        inp.addEventListener('input', validateInput);
    }
}

function validateInput(e) {
    let target = e.target;
    let formGroup = target.parentElement;
    let errorElement = target.nextElementSibling;

    if (target.name === 'name') {
        if (target.value.length <= 2) {
            showError(formGroup, errorElement, 'Ism 3ta harfdan oshishi kerak');
            nameStatus = false;
        } else {
            hideError(formGroup, errorElement);
            nameStatus = true;
        }
    } else if (target.name === 'email') {
        if (!target.value.includes('@')) {
            showError(formGroup, errorElement, "Emailda @ belgisi bo'lishi kerak");
            emailStatus = false;
        } else {
            hideError(formGroup, errorElement);
            emailStatus = true;
        }
    }
}

inpName.addEventListener('blur', (e) => {
    let target = e.target;
    let formGroup = inpName.parentElement;
    let errorElement = inpName.nextElementSibling;
    if (target.value === '') {
        showError(formGroup, errorElement, "To'ldirilishi shart");
        nameStatus = false;
    } else {
        hideError(formGroup, errorElement);
        nameStatus = true;
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let values = Object.fromEntries(formData.entries());

    if (nameStatus && emailStatus && phoneStatus) {
        console.log(values);
    } else {
        console.log('Error');
    }
});