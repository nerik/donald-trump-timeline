$('.wikitable').each(function(i, table) {
   var state = $(table).prevAll('h3').first().text().replace('[edit]','');
   //console.log(state);

   $t = $(table);

   $t.find('td:nth-child(n+4)').each(function(j, td) {
      if (!$(td).attr('style')) {
          $(td).text('');
      }
   });

   $t.find('td').removeAttr( 'rowspan' )

   $t.find('tr').each(function(k, tr) {
      if ($(tr).find('td').length===4) {
         $(tr).remove()
      }
      var text = $(tr).find('td:nth-child(n+4)').text();
   });


   $t.find('tr').prepend('<td>'+state+'</td>');
   $t.find('th').first().prev().replaceWith('<th>state</th>');

});

$('#mw-content-text > *:not(table)').remove();

console.log($('#mw-content-text').html())
