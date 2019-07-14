import { Component } from '@angular/core';

//librerias para poder utilizar la base de datos y las listas en firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  public title:string;
  //public peliculas:Array<object>;
  public persona:object;
  public mostrar_formulario:boolean;
  public pelicula:any;
  public edit:boolean;
  public peliculas:AngularFireList<any[]>;

  constructor(public db: AngularFireDatabase){
    this.title = 'Lista de Peliculas';


    // Se comentan estas lineas, pues no es la manera de enviar los datos a nuestra base de datos en firebase
    /*this.peliculas=[
    {id:1, titulo:'Avatar', genero:'ficcion', duracion:'2:30'},
    {id:2, titulo:'Avenger', genero:'accion', duracion:'2:30'},
    {id:3, titulo:'Shrek', genero:'animada', duracion:'2:15'},
    {id:4, titulo:'Toy Story 4', genero:'animada', duracion:'2:40'},
    {id:5, titulo:'2012', genero:'accion', duracion:'2:20'},
    ];*/

    this.persona=[{nombre:''}];
    this.mostrar_formulario=false;
    this.pelicula={id:null, titulo:null, genero:null, duracion:null};
    this.edit = false;

    //Aca usamos el objeto db del tipo AngularFireDatabase con su propiedad para manejar las listas
    this.peliculas=db.list('peliculas/');
  }

  formulario(){
    this.mostrar_formulario=true;
  }

  cancelar(){
    this.mostrar_formulario=false;
  }

  agregar(){
    
    this.pelicula.id=Date.now();
    this.db.database.ref('peliculas/'+this.pelicula.id).set(this.pelicula);
    this.mostrar_formulario = false;
    this.pelicula={id:null, titulo:null, genero:null, duracion:null};

    /*if (this.edit) {
      var limite = this;
      this.peliculas.forEach(function(pelicula, index){
        if (pelicula.id == limite.pelicula.id) {
          limite.peliculas[index] = limite.pelicula;
        }
      });
      this.mostrar_formulario=false;
      this.pelicula={id:null,titulo:null,genero:null,duracion:null};
    }else{
      this.pelicula.id = parseInt(Math.random()*9+1);//0-9 aleatoriamente
      this.peliculas.push(this.pelicula);
      this.mostrar_formulario = false;
      this.pelicula={id:null, titulo:null, genero:null, duracion:null}
    }*/
    
  }

  editar(pelicula){
    this.edit=true;
    this.pelicula = pelicula;
    this.mostrar_formulario = true;
  }

  /*eliminar(){
    var limite = this;
    this.peliculas.forEach(function(pelicula, index){
      if (pelicula == limite.pelicula 
        && confirm("Quieres eliminar esta pelicula?")) {
        limite.peliculas.splice(index, 1);    
        }
      });
    this.mostrar_formulario=false;
    this.pelicula={id:null, titulo:null, genero:null, duracion:null};
  }*/
}