function includeScript() {
    window.onload = function() {
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://calendar.time.ly/embed.js';
        scriptElement.setAttribute('data-src', 'https://calendar.time.ly/cvylkpzb/stream');
        scriptElement.setAttribute('data-max-height', '0');
        scriptElement.setAttribute('id', 'timely_script');
        scriptElement.setAttribute('class', 'timely-script');
        scriptElement.async = true; // Use async if you want asynchronous loading
        
        // Append the script element to the head of the document
        document.head.appendChild(scriptElement);
    };    
}

export default function decorate(block) {
    console.log(block);
    const calendarBlock = document.createElement('div');
    calendarBlock.id = 'timely_script';
    block.appendChild(calendarBlock);
    includeScript();
}