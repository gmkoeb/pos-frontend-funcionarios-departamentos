import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table'
import { TooltipModule } from 'primeng/tooltip'
import { InputTextModule } from 'primeng/inputtext';

interface Departamento {
  id: number;
  nomeDepartamento: string;
}

@Component({
  selector: 'app-departamentos-pesquisa',
  imports: [ButtonModule, TableModule, TooltipModule, InputTextModule],
  templateUrl: './departamentos-pesquisa.html',
  styleUrl: './departamentos-pesquisa.css',
})

export class DepartamentosPesquisa {
  departamentos: Departamento[] = [
    { id: 1, nomeDepartamento: "Financeiro" },
    { id: 2, nomeDepartamento: "Recursos Humanos" },
    { id: 3, nomeDepartamento: "Tecnologia da Informação" },
    { id: 4, nomeDepartamento: "Marketing" },
    { id: 5, nomeDepartamento: "Vendas" },
    { id: 6, nomeDepartamento: "Logística" },
    { id: 7, nomeDepartamento: "Jurídico" },
    { id: 8, nomeDepartamento: "Atendimento ao Cliente" },
    { id: 9, nomeDepartamento: "Pesquisa e Desenvolvimento" },
    { id: 10, nomeDepartamento: "Compras" },
    { id: 11, nomeDepartamento: "Operações" }
  ];
}
