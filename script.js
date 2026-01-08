function processText() {
    let input = document.getElementById('input').value;
    input = input.replace(/\/\/.*/g, '');
    input = input.replace(/\/\*[\s\S]*?\*\//g, '');
    input = input.replace(/[\s\n\t]+/g, '');
    input = input.replace(/[A-Z]/g, match => match.toLowerCase());
    
    let result = '';
    let i = 0;
    while (i < input.length) {
        if (input.substring(i, i + 6) === 'printf') {
            result += 'write';
            i += 6;
        }
        else if (input.substring(i, i + 5) === 'scanf') {
            result += 'read';
            i += 5;
        }
        else {
            result += input.charCodeAt(i) + ' ';
            i++;
        }
    }
    
    document.getElementById('output').value = result;
    updateCharCount();
}

function clearAll() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
    updateCharCount();
}

function updateCharCount() {
    const inputCount = document.getElementById('input').value.length;
    const outputCount = document.getElementById('output').value.length;
    
    document.getElementById('inputCount').textContent = inputCount;
    document.getElementById('outputCount').textContent = outputCount;
}

document.getElementById('input').addEventListener('input', updateCharCount);

document.getElementById('input').addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'Enter') {
        processText();
    }
});

updateCharCount();