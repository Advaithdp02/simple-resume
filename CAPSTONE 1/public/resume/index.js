const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.loglink');
const reglink=document.querySelector('.reglink');
const loginbtn=document.querySelector('.btnlogin');
const close=document.querySelector('.iconclose');

const home=document.querySelector('explore')
reglink.addEventListener('click' ,()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click' ,()=>{
    wrapper.classList.remove('active');
});
loginbtn.addEventListener('click' ,()=>{
    wrapper.classList.add('active-pop');
});
close.addEventListener('click' ,()=>{
    wrapper.classList.remove('active-pop');
});
close.addEventListener('click' ,()=>{
    wrapper.classList.add('home');
});
