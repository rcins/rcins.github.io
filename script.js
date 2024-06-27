document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Nothing to see here..';
    button.addEventListener('click', function() {
        alert('Thanks for checking out my site! ');
    });
    document.body.appendChild(button);
});
