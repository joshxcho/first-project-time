$(document).ready(function(){
  $('.setData').on('click', function(){
   
    let snippetNameValue = $('[name=snippetName]').val();
    $('.debug').text(snippetNameValue);
    let snippetTextValue = $('[name=snippetText]').val();
    $('.debug').text(snippetTextValue)

    localStorage.setItem(snippetNameValue, snippetTextValue);
   
    $('[name=snippetName]').val('');
    $('[name=snippetText]').val('');

  });

  $('.getData').on('click', function(){
    let retrievedData = localStorage.getItem(snippetNameValue, snippetTextValue);
    $('.debug').text(retrievedData);
  });

});


  //   let textFieldValue = $('[name=snippetName]').val($('[name=snippetText]').val());
    
  //   $('.debug').text(textFieldValue);



  //   localStorage.setItem('myFormTextData', textFieldValue)
    
  //   $('[name=snippetName').val('');
  //   $('[name=snippetText]').val('')
   
  // });

  // $('.getData').on('click', function() {
  //   let retrievedData = localStorage.getItem('myFormTextData');
  //   $('.debug').text(retrievedData);
  // });

 
