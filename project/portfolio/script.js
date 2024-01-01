const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            // entry.target.classList.remove('show');
        }
    }));
});

const targets = document.querySelectorAll('.skill-value');
targets.forEach((item) => observer.observe(item));