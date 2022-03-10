import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestadosService {

  url:any = "http://localhost:8080/v1/clientes"

  constructor(
    private http:HttpClient
  ) { }

  public verEncuestas(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarEncuesta(data:any) {
    this.http.post(this.url, data).subscribe({
      next: response => console.log(response),
      error: e => console.log(e)
    })
  }
  
}
