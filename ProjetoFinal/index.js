$(document).ready(function(){
    $("input").blur(function(){
    if($(this).val() == "")
        {
        $(this).css({"border-color" : "#F00", "padding": "2px"});
        }
    });
})


$("textarea").blur(function(){
    if($(this).val() == "")
        {
        $(this).css({"border-color" : "#F00", "padding": "2px"});
        }
});

var inputs = $('input').on('keyup', verificarInputs);
function verificarInputs() {
    const preenchidos = inputs.get().every(({value}) => value)
    $('button').prop('disabled', !preenchidos);
}

var inputs = $('textarea').on('keyup', verificarInputs);
function verificarInputs() {
    const preenchidos = inputs.get().every(({value}) => value)
    $('button').prop('disabled', !preenchidos);
}