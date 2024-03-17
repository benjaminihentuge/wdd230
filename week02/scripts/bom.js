const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        li.textContent = input.value.trim();
        
        li.append(deleteButton);
        
        list.append(li);
        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        input.focus();
        
        input.value = '';
    } else {
        alert('Please enter a chapter before adding.');
        input.focus();
    }
});
