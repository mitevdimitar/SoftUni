function create(words) {
   let content = $('#content');
   for (let word of words) {
      let div = $('<div></div>');
      let p = $(`<p>${word}</p>`);
      p.css('display', 'none');
      div.append(p);
      content.append(div);
      div.on('click', function() {
         p.css('display', 'block');
      });
   }
}