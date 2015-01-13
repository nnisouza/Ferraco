
var master_resizer = {window: {el: null, width: null, height: null}};
    
$(document).ready(function() {
        $(window).resize(TamanhoTela).trigger('resize');
        function TamanhoTela() {
            master_resizer.window.width = $(window).width();
            master_resizer.window.height = $(window).height();
            $medida = master_resizer.window.width /2 - 295.5;
            $medida2 = 745 /2 - 295.5;
            $medida3 = master_resizer.window.height /2 - 62;
            if (master_resizer.window.height > 781)
                $('body>.container').css('height', $medida3);
            if (master_resizer.window.width > 745)
                $('#vergalhao>.sideVergalhao').css('width', $medida);
            if (master_resizer.window.width < 745)
                $('#vergalhao>.sideVergalhao').css('width', $medida2);
    };
    
    
    $("#submit").click(function() {   		
		var nomeVal = $("#nome").val();
  		if(nomeVal == '') {			
   			$("#alertForm").html('Você esqueceu de digitar o seu nome.');
			$("#alertForm").css("color", "#ff0000");
			$("#nome").select();
			return false;
  		}
      	var emailToVal = $("#email").val();
  		if(emailToVal == '') {
			$("#alertForm").html('Você esqueceu de digitar o seu email.');
			$("#alertForm").css("color", "#ff0000");
			$("#email").select();
			return false;
  		} else {
			var atpos		= emailToVal.indexOf("@");
			var dotpos		= emailToVal.lastIndexOf(".");
			if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailToVal.length) {
				$("#alertForm").html('Insira um E-mail válido.');
				$("#alertForm").css("color", "#ff0000");
				$("#email").select();
				return false;
			}				
  		}
        var assuntoVal = $("#assunto").val();
		var mensagemVal = $("#mensagem").val();
  		if(mensagemVal == '') {
			$("#alertForm").html('Você não digitou uma mensagem.');
			$("#alertForm").css("color", "#ff0000");
			$("#mensagem").select();
   			return false;
		}
		
		var dataString =  'assunto=' + assuntoVal + '&nome='+ nomeVal + '&email=' + emailToVal + '&mensagem=' + mensagemVal;
		
		$("#submit").attr('value','Enviando');
		$("#submit").attr('disabled','disabled');		
		$.ajax({  
			type: "POST",  
				url: "http://giovannims.com/ferraco/enviacontato.php",  
				data: dataString,  
				success: function() {
					$("#submit").html('Enviado');
                    $("#alertForm").html('E-mail enviado com sucesso.');
			        $("#alertForm").css("color", "#14a304");
					
					setTimeout(function(){
						$("#submit").removeAttr('disabled');
						$("#submit").html('Enviar');					
					}, 2000);
				},
				error: function(){
					$("#submit").html('Falha...');
					$("#alertForm").html('O e-mail não foi enviado');
					setTimeout(function(){
						$("#submit").removeAttr('disabled');
						$("#submit").html('ENVIAR');
					}, 2000);
				}
		});
		return false;  
  	});
});



