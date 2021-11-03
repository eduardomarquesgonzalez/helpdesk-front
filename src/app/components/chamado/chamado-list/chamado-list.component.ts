import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [
      //adiciona uma instancia para teste
    {
      id:                             1,
      dataAbertura:        '03/11/2021',
      dataFechamento:       '03/11/202',
      prioridade:                'ALTA',
      status:               'ANDAMENTO',
      titulo:                'Chamado1',
      observacoes:     'Teste chamado1',
      tecnico:                        1,
      cliente:                        6,
      nomeCliente:   'Eduardo Gonzalez',
      nomeTecnico:    'Albert Einstein'
  }
  ]

 

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura','prioridade','status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
