const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
   // id for btns
    const id = e.target.dataset.id

    if(id){
        // remove active from the tabs
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active')
        });

        //hide other article and focusing on current id
        articles.forEach(function(article){
           article.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})