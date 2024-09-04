module.exports = function toReadable (number) {
    const ones = [
        'zero', 'one', 'two', 'three', 'four', 'five', 
        'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 
        'nineteen'
    ];
    
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 
        'fifty', 'sixty', 'seventy', 'eighty', 
        'ninety'
    ];
    
    const hundreds = 'hundred';
    
    if (number < 20) {
        return ones[number];
    } else if (number < 100) {
        const tenPart = Math.floor(number / 10);
        const onePart = number % 10;
        return `${tens[tenPart]}${onePart > 0 ? ' ' + ones[onePart] : ''}`;
    } else if (number < 1000) {
        const hundredPart = Math.floor(number / 100);
        const rest = number % 100;
        return `${ones[hundredPart]} ${hundreds}${rest > 0 ? ' ' + toReadable(rest) : ''}`;
    }
    
    return '';
}
