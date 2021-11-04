import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {
  //para listagem 

  chamado: Chamado = {
    prioridade:  '',
    status:      '',
    titulo:      '',
    observacoes: '',
    tecnico:     '',
    cliente:     '',
    nomeCliente: '',
    nomeTecnico: '',
 
  }

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

 prioridade = new FormControl(null,[Validators.required])
 status = new FormControl(null,[Validators.required])
 titulo = new FormControl(null,[Validators.required])
 observacoes = new FormControl(null,[Validators.required])
 tecnico = new FormControl(null,[Validators.required])
 cliente = new FormControl(null,[Validators.required])



  constructor(
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

  this.findAllClientes();
  this.findAllTecnicos();
  }

  create(): void {
    this.chamadoService.create(this.chamado).subscribe(resposta =>{
      this.toastrService.success('Chamado criado com sucesso', 'Novo chamado');
      this.router.navigate(['chamados']);
    }, ex =>{
      this.toastrService.error(ex.error.errors)
    })
  }

  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(resposta =>{
      this.clientes = resposta;
    })
  }

  validaCampos(): boolean {
    return this.prioridade.valid &&
           this.status.valid &&
           this.titulo.valid &&
           this.observacoes.valid &&
           this.tecnico.valid &&
           this.cliente.valid 
  }
  

}
