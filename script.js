const openModalButton1 = document.getElementById('openButton1');
const openModalButton2 = document.getElementById('openButton2');
const closeModalButton = document.getElementById('closeButton');
const closeModalButton2 = document.getElementById('closeButton2');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const overlay = document.getElementById('overlay');

function openModal(modal) {
    modal.classList.add('activemodal');
    modal.classList.remove('inactivemodal');
    overlay.classList.add('activeoverlay');
    overlay.classList.remove('inactiveoverlay');
    console.log('work')
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
    overlay.classList.remove('activeoverlay');
    overlay.classList.add('inactiveoverlay');
    console.log('dont');
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

closeModalButton.addEventListener("click", closeModal);
closeModalButton2.addEventListener("click", closeModal);

document.addEventListener("click", function(event) {
    if (modal1.classList.contains('activemodal') || modal2.classList.contains('activemodal')) {
        if (!modal1.contains(event.target) && !modal2.contains(event.target) && !overlay.contains(event.target)) {
            closeModal();
        }
    }
});