import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data: any[] = [];
  porcentajeUsado: number = 0;
  nuevaCategoria: any = {};

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.llenarData();  
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      this.porcentajeUsado = data.porcentaje_usado;
    })
  }

  crearCategoria() {
    // Aquí debes enviar los datos de 'nuevaCategoria' al servidor a través de tu servicio 'apiService'.
    // Puedes hacer una solicitud POST al servidor para crear la nueva categoría.
    this.apiService.crearCategoria(this.nuevaCategoria).subscribe((respuesta) => {
      // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito o error.
      console.log(respuesta);
    });
  }

}
