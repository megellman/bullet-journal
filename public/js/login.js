const loginForm = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if(username && password){
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    }
};
document.querySelector('.login-form').addEventListener('submit', loginForm); 

const signupForm = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if(username && email && password){
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'},
            
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to signup');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupForm);