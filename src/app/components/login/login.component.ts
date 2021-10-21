import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //para validar preenchimento dos campos de login
  creds: Credenciais = {
    email:'',
    senha:''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3))
  //insere no constructor para utilizar o toastr no metodo (logar)
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  // para exibir um modal 
  logar (){
    this.toastr.error('usuario e/ou senha invalidos', 'Login');
    this.creds.senha = '';
    
  }
  validaCampos(): boolean {
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
  }
    return false;
  }

}
