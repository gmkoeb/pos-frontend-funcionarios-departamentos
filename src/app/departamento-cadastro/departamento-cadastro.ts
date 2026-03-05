import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Button, ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';

class Departamento {
  nome: string = ""
}

@Component({
  selector: 'app-departamento-cadastro',
  imports: [FormsModule, Button, InputTextModule, ButtonModule, IftaLabelModule],
  templateUrl: './departamento-cadastro.html',
  styleUrl: './departamento-cadastro.css',
})

export class DepartamentoCadastro {
  departamento = new Departamento()
  
  salvar(form: NgForm) {
    console.log(form);
    console.log(this.departamento.nome)
    form.reset();
  }
}

