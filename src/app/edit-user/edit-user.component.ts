import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { CreateUser, update } from '../user.models';
import { InsuranceService } from '../insurance.service';
import { Router } from '@angular/router';
import { FormUserComponent } from "../form-user/form-user.component";

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormUserComponent],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})

export class EditUserComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  userService = inject(InsuranceService);
  router = inject(Router);
  persona?: update; // Propiedad enlazada al formulario

  ngOnInit(): void {
    this.userService.getUserById(this.id).subscribe({
      next: (Update) => {
        this.persona = Update;
      },
      error: (err) => console.error('Error al obtener usuario:', err),
    });
  }

   save(Update: update) {
     this.userService.updateUser(this.id, Update).subscribe({
       next: () => {
         console.log('Usuario actualizado exitosamente');
         this.router.navigate(['/users']);
       },
       error: (err) => console.error('Error al actualizar usuario:', err),
     });
   }

  // save(Update: update){
  //   this.userService.updateUser(this.id, Update).subscribe(() => {
  //     this.router.navigate(['/users']);
  //   })
  //}
}
