const name = document.getElementById('name');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const content = document.getElementById('message');
const form = document.getElementById('form');
const error = document.getElementById('error_message');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '') {
        messages.push('Please fill out the name line')
    }

    if (subject === '') {
        messages.push('Please fill out the subject line')
    }

    if (email === '') {
        messages.push('Email is required')
    } else if (!isValid(email)) {
        messages.push('Looks like this is not an email');
    }

    if (content.value.length <= 10) {
        messages.push('Please write a longer message')
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
})