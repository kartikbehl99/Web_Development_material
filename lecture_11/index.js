/**
 * Created by rishabhkhanna on 05/07/18.
 */
$(function () {
    var input = $('input');
    var button = $('.button-class');
    var list = $('#list')

   button.click((e)=>{
       console.log("Rishabh");
       var value = input.val();
       input.val("");
       console.log(e.currentTarget);

       list.prepend(
           $("<li>").html(value)
               .click(function (e) {
                   $(this).css("color", "red")
                   console.log($(this).css("color"));
                   $(this).fadeOut();
               })
               .append(
               $("<button>").text("X")
           )
       )
   })

})

console.log("khanna");