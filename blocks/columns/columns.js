export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      /*row.children[0].setAttribute('class', 'col recent-posts');
      row.children[1].setAttribute('class', 'col recent-posts');
      let colPTags = col.querySelector('p');*/
      
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  const section = document.getElementsByClassName('section columns-container');
  const html = section[0].innerHTML;
  section[0].setAttribute('class','section columns-container outer');
  const column = document.getElementsByClassName('columns-wrapper');
  for(let i = 0; i < column.length; i++) {
    if(column[i].children[0].classList.contains('columns-2-cols') && !column[i].children[0].classList.contains('posts')){
    column[i].children[0].setAttribute('class','columns block columns-2-cols posts');
    const post = column[i].children[0].children;
    console.log(post);
    for(let j = 0; j < post.length; j++) {
      post[j].setAttribute('class','post');
      //console.log(post[j].children);
      const divtag = post[j].children;
      for(let l = 0; l < divtag.length; l++){
      const postFirstChild  = divtag[l].getElementsByTagName('p');
      
      for(let k = 0; k < postFirstChild.length; k++) {
        if(k==0){
          postFirstChild[1].children[1].outerHTML='<h3 class="entry-title">'+postFirstChild[1].children[1].outerHTML+'</h3>';
          //console.log(postFirstChild[1].children[1]);
          postFirstChild[1].outerHTML= '<div class="text">'+postFirstChild[1].innerHTML +'<p class="intro">'+postFirstChild[2].innerHTML+'</p>'+'</div>'
          postFirstChild[2].innerHTML='';
          postFirstChild[0].outerHTML='<h2 class="title">'+postFirstChild[0].innerHTML+'</h2>';
        }
     }
    }
      
}
    
    
    column[i].setAttribute('class','col recent-posts');
    //console.log('col>'+col);
    }
  }
  
}
