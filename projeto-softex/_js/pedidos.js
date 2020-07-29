function validar () {
        var nome = formuser.nome.value;
        var cpf = formuser.cpf.value;        
        var email = formuser.email.value;
        var cel = formuser.cel.value;
        var tel = formuser.tel.value;
        var nasc = formuser.nasc.value;
        var tMod = formuser.tMod.value;
        var tTec = formuser.tTec.value;

      if (nome == ''){
        alert('Preencha o campo nome.');
        formuser.nome.focus();
        return false;
      } 
      if (cpf == ''){
        alert('Preencha o campo CPF')
        formuser.cpf.focus();
        return false;
      }
      if (email == '' || email.indexOf('@') == -1){
        alert('Preencha o campo E-mail.');
        formuser.email.focus();
        return false;
      }

      if (cel == '') {
        alert('Preencha o campo Celular.')
        formuser.cel.focus();
        return false;
      }      

      if (tel == ''){
        alert('Preencha o campo Telefone.');
        formuser.tel.focus();
        return false;
      }

      if (nasc ==''){
        alert('Selecione a sua data de nascimento.')
        formuser.nasc.focus();
        return false;        
      }

      if (tMod == '-------'){
        alert('Escolha o modelo.')
        formuser.tMod.focus();
        return false;
      }

      if (tTec =='-------'){
        alert('Escolha o tecido.')
        formuser.tTec.focus();
        return false;
      }
}