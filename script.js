function processText() {
    let input = document.getElementById('input').value;
    
    // single-line comments
    input = input.replace(/\/\/.*/g, '');
    
    // multi-line comments
    input = input.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // all whitespace (spaces, tabs, newlines)
    input = input.replace(/[\s\n\t]+/g, '');
    
    // uppercase to lowercase
    input = input.replace(/[A-Z]/g, match => match.toLowerCase());
    
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