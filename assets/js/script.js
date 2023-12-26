function iniciarModal(modalID){

    const modal = document.getElementById(modalID)

    if(modal){

    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.id == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
    }
}

const moreButton1 = document.getElementById('moreButton1');
const moreButton2 = document.getElementById('moreButton2');
const moreButton3 = document.getElementById('moreButton3');
const moreButton4 = document.getElementById('moreButton4');
const moreButton5 = document.getElementById('moreButton5');
const moreButton6 = document.getElementById('moreButton6');

moreButton1.addEventListener('click', () => iniciarModal('modal-pokemon bulba'));
moreButton2.addEventListener('click', () => iniciarModal('modal-pokemon ivy'));
moreButton3.addEventListener('click', () => iniciarModal('modal-pokemon veno'));
moreButton4.addEventListener('click', () => iniciarModal('modal-pokemon char'));
moreButton5.addEventListener('click', () => iniciarModal('modal-pokemon meleon'));
moreButton6.addEventListener('click', () => iniciarModal('modal-pokemon zard'));


