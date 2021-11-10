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
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {

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


  constructor(
    private chamadoService: ChamadoService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id')
    this.findById();
   
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta =>{
      this.chamado = resposta;
    }, ex =>{
      this.toastrService.error(ex.error.errors)
    })
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
