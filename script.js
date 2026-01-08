function processText() {
    let input = document.getElementById('input').value;
    
    // Step 1: Remove single-line comments
    input = input.replace(/\/\/.*/g, '');
    
    // Step 2: Remove multi-line comments
    input = input.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Step 3: Strip all whitespace
    input = input.replace(/[\s\n\t]+/g, '');
    
    // Step 4: Convert uppercase to lowercase
    input = input.replace(/[A-Z]/g, match => match.toLowerCase());
    
    // Step 5: Split into characters and process each
    let result = '';
    let i = 0;
    
    while (i < input.length) {
        // Check if current position starts with 'printf'
        if (input.substring(i, i + 6) === 'printf') {
            result += 'write';
            i += 6;
        }
        // Check if current position starts with 'scanf'
        else if (input.substring(i, i + 5) === 'scanf') {
            result += 'read';
            i += 5;
        }
        // For all other characters, convert to ASCII
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