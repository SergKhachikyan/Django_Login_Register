const container = document.getElementById
('container');
const registeBtn = document.
getElementById('register');
const loginBtn = document.getElementById
('login');

registeBtn.addEventListener('click',()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
});