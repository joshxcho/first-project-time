$(document).ready(function(){
  $('.setData').on('click', function(){
   
    let snippetNameValue = $('[name=snippetName]').val();
    // $('.debug').text(snippetNameValue);
    let snippetTextValue = $('[name=snippetText]').val();
    // $('.debug').text(snippetTextValue)

    localStorage.setItem(JSON.stringify(snippetNameValue), JSON.stringify(snippetTextValue));
   
    // $('[name=snippetName]').val('');
    // $('[name=snippetText]').val('');



  });
  
  $('.getData').on('click', function(){
    // let retrievedData = localStorage.getItem(snippetNameValue, snippetTextValue);
    // $('.debug').text(retrievedData);

    const snippetArr = [];
    for (var i = 0; i < localStorage.length; i++) { 
  
    snippetArr.push(JSON.parse(localStorage.key(i)) + ' : ' + JSON.parse(localStorage.getItem(localStorage.key(i))))
      // console.log(snippetArr)

    let $body = $('body');
    let $texts = $('<span class="text">' +snippetArr+ '</span>');
    
    $('.text').remove();
    $('.container').append($texts);

    }
  });
});

 
