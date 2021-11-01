import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router){ }

  ngOnInit(): void {
  }


  logar (){
  this.service.authenticate(this.creds).subscribe(resposta =>{
    this.service.successfulLogin(resposta.headers.get('Authorization'). substring(7))
    this.router.navigate(['']);

  },() =>{
    this.toastr.error('Usuario e/ou senha invalidos ')
  })
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

}

