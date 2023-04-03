const linkDrop = document.getElementById('link-lang')

linkDrop.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.sub-menu').classList.toggle('show')
})