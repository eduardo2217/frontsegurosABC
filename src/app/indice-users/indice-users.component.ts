import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort'; // Importar MatSort
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { CreateUser } from '../user.models';
import { InsuranceService } from '../insurance.service';
import { MatTableDataSource } from '@angular/material/table'; // Para usar el DataSource con matSort

@Component({
  selector: 'app-indice-users',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './indice-users.component.html',
  styleUrls: ['./indice-users.component.css'],
})
export class IndiceUsersComponent implements OnInit, AfterViewInit {
  users: MatTableDataSource<CreateUser> = new MatTableDataSource(); // Usar MatTableDataSource para integrar matSort
  @ViewChild(MatSort) sort: MatSort | undefined; // Para hacer referencia a matSort
  router: any;

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit(): void {
    this.loadUsers(); // Cargar los usuarios inicialmente
  }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.users.sort = this.sort; // Asignar el sort después de que la vista se haya inicializado
    }
  }

  // Método para cargar los usuarios
  loadUsers(): void {
    this.insuranceService.getAllUsers().subscribe({
      next: (data) => {
        this.users.data = data; // Actualizar los usuarios en el MatTableDataSource
      },
      error: (err) => console.error('Error al obtener usuarios:', err),
    });
  }

  // Método para eliminar usuario
  deleteUser(id: number): void {
    this.insuranceService.deleteUser(id).subscribe({
      next: () => {
        // Eliminar el usuario de la lista de usuarios en el dataSource
        this.users.data = this.users.data.filter((user) => user.id !== id);
      },
      error: (err) => console.error('Error al eliminar usuario:', err),
    });
  }

  // Método para actualizar usuario
  updateUser(updatedUser: CreateUser): void {
    this.insuranceService.updateUser(updatedUser.id, updatedUser).subscribe({
      next: (user) => {
        // Actualizar el usuario en la lista
        const index = this.users.data.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          this.users.data[index] = user;
        }
      },
      error: (err) => console.error('Error al actualizar usuario:', err),
    });
  }
  edit(user: CreateUser) {
    this.router.navigate([`users/edit/:${user.id}`]); // Enviar a la pagina edit
  }
}
