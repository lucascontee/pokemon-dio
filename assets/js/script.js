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
moreButton1.addEventListener('click', () => iniciarModal('modal-pokemon bulba'));