import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id')
    this.findById();
    this.findAllClientes();
    this.findAllTecnicos();
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta =>{
      this.chamado = resposta;
    }, ex =>{
      this.toastrService.error(ex.error.errors)
    })
  }

  update(): void {
    this.chamadoService.update(this.chamado).subscribe(resposta =>{
      this.toastrService.success('Chamado atualizado com sucesso', 'Novo chamado');
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
  retornaStatus(status: any): string{
    if (status == '0'){
      return 'ABERTO'
    }else if (status == '1'){
      return 'EM ANDAMENTO'
    }else{
      return 'ENCERRADO'
    }
  }

  retornaPrioridade(prioridade: any): string{
    if (prioridade == 0) {
      return 'BAIXA'
    } else if (prioridade == 1){
      return 'MEDIA'
    } else {
      return 'ALTA'
    }
  }
  

}
