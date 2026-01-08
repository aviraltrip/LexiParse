function processText() {
    let input = document.getElementById('input').value;
    input = input.replace(/\/\/.*/g, '');
    input = input.replace(/\/\*[\s\S]*?\*\//g, '');
    input = input.replace(/[\s\n\t]+/g, '');
    input = input.replace(/[A-Z]/g, match => match.toLowerCase());    
    document.getElementById('output').value = input;
    updateCharCount();
}

function replaceWithAscii() {
    let input = document.getElementById('input').value;
    input = input.split('').map(ch => ch.charCodeAt(0)).join(' ');
    document.getElementById('output').value = input;
    updateCharCount();
}

function replaceFunctions() {
    let input = document.getElementById('input').value;
    input = input.replace(/printf/g, 'write');
    input = input.replace(/scanf/g, 'read');
    document.getElementById('output').value = input;
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