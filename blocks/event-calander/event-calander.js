// setting the attributes for the element
const setAttributes = (ele, obj) => {
    for (const [key, value] of Object.entries(obj)) {
        ele.setAttribute(key, value);
    }
};

export default function decorate(block) {
    let calenderScript = document.createElement('script');
    setAttributes(calenderScript, {
        id: 'timely_script',
        class: 'timely-script',
        src: 'https://calendar.time.ly/embed.js',
        'data-src': 'https://calendar.time.ly/cvylkpzb/',
        'data-max-height': '0'
    });
    document.head.append(calenderScript);
}
