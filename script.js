document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.addEventListener('click', function() {
        alert('Hello, welcome to my personal website!');
    });
    document.body.appendChild(button);
});
