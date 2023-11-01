export default function decorate(block) {
    const calendarBlock = document.createElement('div');
    calendarBlock.id = 'timely_script';
    let iframeBlockFromHubSpot = '<iframe src="https://calendar.time.ly/cvylkpzb/posterboard" width="100%" height="600px" style="border:none; height:100vh"></iframe>';
    calendarBlock.innerHTML = iframeBlockFromHubSpot;
    block.appendChild(calendarBlock);
}
