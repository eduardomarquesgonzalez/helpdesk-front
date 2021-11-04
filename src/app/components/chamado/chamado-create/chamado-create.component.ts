import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

 prioridade = new FormControl(null,[Validators.required])
 status = new FormControl(null,[Validators.required])
 titulo = new FormControl(null,[Validators.required])
 descricao = new FormControl(null,[Validators.required])
 tecnico = new FormControl(null,[Validators.required])
 cliente = new FormControl(null,[Validators.required])


  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.prioridade.valid &&
           this.status.valid &&
           this.titulo.valid &&
           this.descricao.valid &&
           this.tecnico.valid &&
           this.cliente.valid 
  }
  

}
