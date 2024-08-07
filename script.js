const openModalButton1 = document.getElementById('openButton1');
const openModalButton2 = document.getElementById('openButton2');
const openModalButton3 = document.getElementById('openButton3');
const closeModalButton = document.getElementById('closeButton');
const closeModalButton2 = document.getElementById('closeButton2');
const closeModalButton3 = document.getElementById('closeButton3');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const overlay = document.getElementById('overlay');

function openModal(modal) {
    if(modal.classList.contains('inactivemodal')){
        closeModal();
        modal.classList.add('activemodal');
        modal.classList.remove('inactivemodal');
        overlay.classList.add('activeoverlay');
        overlay.classList.remove('inactiveoverlay');
    }
    else{
        closeModal();
    }
}

function closeModal() {
    if (modal1.classList.contains('activemodal')) {
        modal1.classList.remove('activemodal');
        modal1.classList.add('inactivemodal');
    }
    if (modal2.classList.contains('activemodal')) {
        modal2.classList.remove('activemodal');
        modal2.classList.add('inactivemodal');
    }
    if (modal3.classList.contains('activemodal')) {
        modal3.classList.remove('activemodal');
        modal3.classList.add('inactivemodal');
    }
    overlay.classList.remove('activeoverlay');
    overlay.classList.add('inactiveoverlay');
}

openModalButton1.addEventListener("click", function(event) {
    event.preventDefault();
    openModal(modal1);
    event.stopPropagation();
});

openModalButton2.addEventListener("click", function(event) {
    event.preventDefault();
    openModal(modal2);
    event.stopPropagation();
});

openModalButton3.addEventListener("click", function(event) {
    event.preventDefault();
    openModal(modal3);
    event.stopPropagation();
});

closeModalButton.addEventListener("click", closeModal);
closeModalButton2.addEventListener("click", closeModal);
closeModalButton3.addEventListener("click", closeModal);

document.addEventListener("click", function(event) {
    if (modal1.classList.contains('activemodal') || modal2.classList.contains('activemodal') || modal3.classList.contains('activemodal')) {
        if (!modal1.contains(event.target) && !modal2.contains(event.target) && !modal3.contains(event.target) && !overlay.contains(event.target)) {
            closeModal();
        }
    }
});