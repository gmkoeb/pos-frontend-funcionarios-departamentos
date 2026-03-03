import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartamentosPesquisa } from "./departamentos-pesquisa/departamentos-pesquisa";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DepartamentosPesquisa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend-funcionarios-departamentos');
}
