$(document).ready(function(){
    $("#phone").mask('(00) 00000-0000'); 
})

$(".form-control").blur(function(){
  ($(this).val() == "" ? $(this).addClass("validation-error"):$(this).removeClass("validation-error"))
});

let inputs = $('.form-control').on('keyup', verificarInputs);
function verificarInputs() {
    const preenchidos = inputs.get().every(({value}) => value)
    $('button').prop('disabled', !preenchidos);
}

let button = document.getElementById("sendMessageButton").addEventListener("click",function(e){
    e.preventDefault();
    $('.modal').modal('show');
    $('.form-control').val("");
})