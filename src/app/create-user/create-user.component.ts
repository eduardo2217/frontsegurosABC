import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../insurance.service'; // Servicio
import { CreateUser } from '../user.models';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormUserComponent],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  private readonly insuranceService = inject(InsuranceService);
  private readonly router = inject(Router);

  save(user: CreateUser) {
    this.insuranceService.createUser(user).subscribe({
      next: () => {
        console.log('Usuario creado exitosamente');
        this.router.navigate(['/users']);
      },
      error: (err) => console.error('Error al crear usuario:', err),
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
