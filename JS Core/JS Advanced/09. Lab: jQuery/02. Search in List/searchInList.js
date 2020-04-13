function search() {
   $(`#towns li`).css('font-weight', '');
   let searched = $('#searchText').val();
   let list = $(`#towns li:contains(${searched})`).css('font-weight', 'bold');
   let count = list.length;
   $('#result').text(count + ' matches found');
}
