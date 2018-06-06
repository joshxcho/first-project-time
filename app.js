$(document).ready(function(){
  $('.setData').on('click', function(){
   
    let snippetNameValue = $('[name=snippetName]').val();
    // $('.debug').text(snippetNameValue);
    let snippetTextValue = $('[name=snippetText]').val();
    // $('.debug').text(snippetTextValue)

    localStorage.setItem(JSON.stringify(snippetNameValue), JSON.stringify(snippetTextValue));
   
  });
  
  $('.getData').on('click', function(){

    const snippetArr = [];
    for (var i = 0; i < localStorage.length; i++) { 
  
    snippetArr.push(JSON.parse(localStorage.key(i)) + ' : ' + JSON.parse(localStorage.getItem(localStorage.key(i))))

    let $body = $('body');
    let $texts = $('<span class="text">' +snippetArr+ '</span>');
    
    $('.text').remove();
    $('.container').append($texts);

    };
 
     $('.searchData').on('click', function() {

      let snippetSearchValue = $('.searchBar').val();
      
      let $result = localStorage.getItem(snippetSearchValue);
      // console.log($result)
      $('.container').html($result);
        
    });;
  });
});

 
