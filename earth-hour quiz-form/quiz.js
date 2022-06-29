const correctAnswers = ['A', 'B', 'A', 'A', 'A'];

const frm = document.querySelector('.quiz-form');
frm.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [frm.q1.value, frm.q2.value, frm.q3.value, frm.q4.value, frm.q5.value];
    userAnswers.forEach((ans, index) => {
        if (ans === correctAnswers[index]) {
            score+=20;
        }
    });

    scrollTo({top:0, behavior:'smooth'}); // window object
    const res = document.querySelector('.result');
    const lk = document.querySelector('.luck');
    res.classList.remove('d-none');
    lk.classList.add('d-none');
    
    let op = 0;

    const timer = setInterval(() => {
        res.querySelector('span').textContent = `${op}%`;
        if (op===score) {
            clearInterval();
        }
        else {
            op++;
        }
    }, 10);

    const danswers = document.querySelectorAll('i')
    danswers.forEach( e => {
        e.classList.remove("d-none");
    });

    

});

    