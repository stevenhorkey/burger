$( document ).ready(function() {
  $('#submit-burger').one('click',function(event){
    event.preventDefault();
    var newBurger = {
        burger_name: $('#type-burger').val().trim(),
        devoured : false
    }
    $.ajax('/api/burgers',{
    type:'POST',
    data: newBurger
    }).then(
    function(){
      console.log('created new burger');

      location.reload();
    });
  })

  $('.devour-btn').one('click',function(event){
    var id = $(this).data('id');

    var newDevour = {
      devoured: true
    };
    console.log(id);
    
    $.ajax('/api/burgers/'+id,{
      type: 'PUT',
      data: newDevour
    }).then(
      function(){
        console.log('devoured',id);
        location.reload();
      });
  });
});