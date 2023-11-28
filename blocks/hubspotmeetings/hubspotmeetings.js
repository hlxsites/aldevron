function loadHSScript() {
    if (!document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]')) {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        scriptTag.async = true;
        document.head.appendChild(scriptTag);
    }
}

export default function decorate(block) {
    console.log(block);
    const link = block.querySelector('a');
    const hsCalendarBlock = document.createElement('div');
    hsCalendarBlock.id = 'hs_script';

    // Specify a fixed size or use CSS to define dimensions to prevent layout shifts
    hsCalendarBlock.style.width = '100%'; // Adjust these values based on the expected size
    hsCalendarBlock.style.minHeight = '400px'; // Adjust these values based on the expected size

    block.innerText = '';
    block.appendChild(hsCalendarBlock);
    setTimeout(() => {
        let blockFromHubSpot = `<div class="meetings-iframe-container" data-src="${link.href}">&nbsp;</div>`;
        hsCalendarBlock.innerHTML = blockFromHubSpot;
        loadHSScript();
    }, 3000);
}
