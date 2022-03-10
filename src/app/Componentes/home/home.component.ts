import { Component, OnInit } from '@angular/core';
import { EncuestadosService } from 'src/app/Servicios/encuestados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm:FormGroup
  encuesta:any
  arrayEncuestas:any = []

  constructor(
    private fb:FormBuilder,
    private encuestadosSrv:EncuestadosService
  ) {
    this.myForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(3)]],
      nacimiento:["",[Validators.required]],
      genero:["",[Validators.required,]],
      provincia:["",[Validators.required,Validators.minLength(3)]],
      valoracion:["",[Validators.required]],
      recomendacion:["",[Validators.required]],
      comentario:["",[Validators.required,Validators.minLength(3)]]
    })
   }

   Registrar(){
    let form = {
      nombre:this.myForm.get("nombre")?.value,
      nacimiento:this.myForm.get("nacimiento")?.value,
      genero:this.myForm.get("genero")?.value,
      provincia:this.myForm.get("provincia")?.value,
      valoracion:this.myForm.get("valoracion")?.value,
      recomendacion:this.myForm.get("recomendacion")?.value,
      comentario:this.myForm.get("comentario")?.value
    }
    this.encuestadosSrv.guardarEncuesta(form);
    localStorage.setItem("encuesta","true");
    this.myForm.reset();
   }

  ngOnInit(): void {
    this.obtenerEncuestas();
  }

  obtenerEncuestas(){
    this.encuestadosSrv.verEncuestas()
    .subscribe(respuesta=>{
      this.encuesta = respuesta;
      this.arrayEncuestas = this.encuesta.clienteResponse.cliente
      console.log(this.arrayEncuestas)
    })
  }

}
