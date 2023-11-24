function loadHSScript() {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    document.head.prepend(scriptTag);
}

export default function decorate(block) {
    loadHSScript();
    const hsCalendarBlock = document.createElement('div');
    hsCalendarBlock.id = 'hs_script';
    let blockFromHubSpot = '<div class="meetings-iframe-container" data-src="https://app.hubspot.com/meetings/tom-lynch?embed=true">&nbsp;</div>';
    hsCalendarBlock.innerHTML = blockFromHubSpot;
    block.appendChild(hsCalendarBlock);
  }
  