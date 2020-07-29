
function validar(){
        var nome = formcont.nome.value;    
        var email = formcont.email.value;
        var tel = formcont.tel.value;        
        var cel = formcont.cel.value;
        var cid = formcont.cid.value;
        var est = formcont.est.value;
        var msg = formcont.msg.value;

      if (nome == ''){
        alert('Preencha o campo nome.');
        formcont.nome.focus();
        return false;
      } 

      if (email == '' || email.indexOf('@') == -1){
        alert('Preencha o campo E-mail.');
        formcont.email.focus();
        return false;
      }

      if (tel == ''){
        alert('Preencha o campo Telefone.');
        formcont.tel.focus();
        return false;
      }      

      if (cel == '') {
        alert('Preencha o campo Celular.')
        formcont.cel.focus();
        return false;
      }      


      if (cid ==''){
        alert('Preencha o campo Cidade.')
        formcont.cid.focus();
        return false;        
      }

      if (est == ''){
        alert('Preencha o campo Estado.')
        formcont.est.focus();
        return false;
      }

      if (msg ==''){
        alert('Preencha o campo Mensagem.')
        formcont.msg.focus();
        return false;
      }	
}