const ff = document.querySelector('.add');
const tlist = document.querySelector('.list-group');

generateTemplate = todo => {
    ts = `<li class="list-group-item d-flex justify-content-between align-items-center"> 
          <span> ${todo} </span> <i class="far fa-trash-alt delete"></i> </li>`;
    return ts;
};

    // create new todos

ff.addEventListener('submit', e => {
    e.preventDefault();
    ntd = ff.add.value.trim();
    if (ntd.length > 4) {
        nts = generateTemplate(ntd);
        tlist.innerHTML += nts;
    }
    ff.reset();
});


    // delete the todos

tlist.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


    // search the todo list

const filterTodos = term => {
    Array.from(tlist.children)
    .filter(e => !e.textContent.toLowerCase().includes(term))
    .forEach(e => e.classList.add('filtered'));

    Array.from(tlist.children)
    .filter(e => e.textContent.toLowerCase().includes(term))
    .forEach(e => e.classList.remove('filtered'));

};

const sb = document.querySelector('.search input');
sb.addEventListener('keyup', e=> {
    const term = sb.value.trim().toLowerCase();
    filterTodos(term);
});


function darkMode() {
    const element = document.querySelector('body');
    element.classList.toggle("dark-mode-b");

    const inp = document.querySelectorAll('input');

    const btnn = document.querySelector('button')
    if (btnn.innerText === "I want dark mode :)") {
        btnn.innerText = "No, gimme light mode :(";
        inp.forEach(i=>i.style.color ='white')
    } 
    
    else {
        btnn.innerText = "I want dark mode :)";
        inp.forEach(i=>i.style.color ='black')
    }
}