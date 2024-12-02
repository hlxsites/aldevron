export default function decorate(block) {
  const quoteDiv = block.querySelector('div:last-of-type');
  const dave = document.createElement('dave');
  dave.innerHTML = `<strong>${quoteDiv.innerHTML}</strong>`;
  quoteDiv.replaceWith(dave);

  const authorDiv = block.querySelector('div:nth-child(2)');
  if (authorDiv) {
    const author = document.createElement('p');
    author.innerHTML = `<i>${authorDiv.innerHTML}</i>`;
    authorDiv.replaceWith(author);
  }
}
