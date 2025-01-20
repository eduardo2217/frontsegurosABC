import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser } from './user.models';

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  private readonly baseUrl = 'https://localhost:7004/api/InsuranceControllers';

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getAllUsers(): Observable<CreateUser[]> {
    return this.http.get<CreateUser[]>(this.baseUrl);
  }

  // Obtener un usuario por ID
  public getUserById(id: number): Observable<CreateUser> {
    return this.http.get<CreateUser>(`${this.baseUrl}/${id}`);
  }

  // Crear un usuario
  createUser(user: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(this.baseUrl, user);
  }

  // Actualizar un usuario
  updateUser(id: number, user: CreateUser): Observable<CreateUser> {
    return this.http.put<CreateUser>(`${this.baseUrl}/${id}`, user);
  }

  // Eliminar un usuario
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
