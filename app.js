var g = G$('john','doe')
$('#login').click(function(){
    var loginGrtr = G$('John', 'Doe');
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log()
})