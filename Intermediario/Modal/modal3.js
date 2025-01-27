const buttonOpen = document.querySelector('button');
const modal = document.querySelector('custom-modal dialog');
const buttonClose = document.querySelector('#closeModal');

buttonOpen.onclick = () => {
    modal.showModal();
}

buttonClose.onclick = () => {
    modal.close();
}
