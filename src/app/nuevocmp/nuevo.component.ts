import { Component } from '@angular/core';

@Component({
  selector: 'componenteNuevo',
  templateUrl: './nuevo.component.html'
})

export class NuevoComponent {
  public nombre:string;
  public lista:Array<object>;
  public pregunta:boolean;
  public mostrar_si_es_verdadero:string;  	

  constructor(){
	this.nombre = 'Personalizado';
	this.lista = [
	{id:1, titulo:'Item 1', descripcion:'descripcion item 1'},
	{id:2, titulo:'Item 2', descripcion:'descripcion item 2'},
	{id:3, titulo:'Item 3', descripcion:'descripcion item 3'},
	];
	this.pregunta = true;
	this.mostrar_si_es_verdadero = 'Mostrando con ngIf';
  }


  
}
