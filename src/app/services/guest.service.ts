import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../common/guest';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/guests/';

@Injectable({
  providedIn: 'root'
})
export class GuestService {



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getGuestsList(): Observable<Guest[]>{
    return this.httpClient.get<GetResponse>(baseUrl).pipe(
      map(respone => respone._embedded.guests)
    );
  }


create(guest: Guest): Observable<Guest>{
    return this.httpClient.post<Guest>(baseUrl, JSON.stringify(guest), this.httpOptions);
}

getById(id:number): Observable<Guest>{
  return this.httpClient.get<Guest>(baseUrl+id);
}

getAll(): Observable<Guest[]>{
  return this.httpClient.get<Guest[]>(baseUrl);
}

update(id: number, guest: Guest): Observable<Guest>{
  return this.httpClient.put<Guest>(baseUrl+id, JSON.stringify(guest), this.httpOptions);
}

delete(id: number | undefined){
    console.log(id);
    return this.httpClient.delete<Guest>(baseUrl+id).subscribe(
      data => console.log(data)
    );
}

}

interface GetResponse{
  _embedded: {
    guests: Guest[];
  }
}