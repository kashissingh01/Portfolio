document.querySelector('.cross').style.display ='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    if(document.querySelector('.slidebar').classList.contains('slidebarGo'))
    {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.cross').style.display = 'inline'
        setTimeout(()=>{
            document.querySelector('.ham').style.display='none'
        },100);
    }
})

