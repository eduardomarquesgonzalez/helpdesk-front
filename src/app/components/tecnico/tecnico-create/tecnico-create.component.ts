import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  
  nome = new FormControl(null, Validators.minLength(3))
  cpf = new FormControl(null, Validators.required)
  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))
 

  constructor() { }

  ngOnInit(): void {
  }

  //metodo para validar campo retornando um boolean
  validCampos(): boolean{
    return this.nome.valid && 
            this.cpf.valid  && 
            this.email.valid && 
            this.senha.valid
  }

}
