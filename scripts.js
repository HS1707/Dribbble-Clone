function openModal(shotId) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');

    // Set the image source for the modal (this could be dynamic)
    if (shotId === 'shot1') {
        modalImage.src = './img1.jpg';
    } else if (shotId === 'shot2') {
        modalImage.src = './img2.jpg';
    }

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
