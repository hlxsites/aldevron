import { div } from '../../scripts/dom-builder.js';

export default function decorate(block) {
    //Convert all childs of blocks in array and iterate over each row
    [...block.children].forEach((row, rowindex) => {
        // Add the 'parent' class to each row and conditionally add 'parent-reverse' based on the row index
        row.classList.add("parent", rowindex % 2 !== 0 && "parent-reverse");

        const rightDiv = div({ class: 'right-div' });
        const stepTextDiv = div({ class: 'timeline-step' });

        [...row.children].forEach((content, index) => {
            // Add specific classes based on the index of the child element
            const classes = ["timeline-img", "step-text", "title"];
            content.classList.add(classes[index] || '');

            if (index === 1) {
                 // Check if this is the last row and add 'last-step'
                if (rowindex === block.children.length - 1) {
                    content.classList.add("last-step");
                }
                stepTextDiv.appendChild(content);
            } else if (index === 2) {
                const pTags = content.querySelectorAll('p');
                pTags.forEach(pTag => pTag.classList.add("desc"));
                rightDiv.appendChild(content);
            }
        });

        row.append(stepTextDiv, rightDiv);
    });
}
