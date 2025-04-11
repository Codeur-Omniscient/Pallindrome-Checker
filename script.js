document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');
    
    checkBtn.addEventListener('click', function() {
        // Check if input is empty
        if (textInput.value === '') {
            alert('Please input a value');
            return;
        }
        
        const inputText = textInput.value;
        const isPalindrome = checkPalindrome(inputText);
        
        // Display result
        if (isPalindrome) {
            result.textContent = `${inputText} is a palindrome`;
            result.className = 'result-container palindrome';
        } else {
            result.textContent = `${inputText} is not a palindrome`;
            result.className = 'result-container not-palindrome';
        }
        
        // Add animation effect
        result.style.opacity = '0';
        setTimeout(() => {
            result.style.opacity = '1';
        }, 10);
    });
    
    // Function to check if a string is a palindrome
    function checkPalindrome(str) {
        // Convert to lowercase and remove all non-alphanumeric characters
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Compare the string with its reverse
        const reversedStr = cleanStr.split('').reverse().join('');
        
        return cleanStr === reversedStr;
    }
    
    // Add enter key functionality
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });
});