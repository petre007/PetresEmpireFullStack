import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../common/guest';

const baseUrl = 'http://localhost:8080/api/guests';

@Injectable({
  providedIn: 'root'
})
export class AddGuestService {

  

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(baseUrl);
  }

  get(id: number): Observable<any>{
    return this.httpClient.get(`${baseUrl}/${id}`);
  }

  create(data: Guest): Observable<any>{
    return this.httpClient.post(baseUrl, data);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any>{
    return this.httpClient.delete(baseUrl);
  }

  findByFirstName(firstName: string): Observable<any>{
    return this.httpClient.get(`${baseUrl}?firstName=${firstName}`);
  }
}
