import { Component, EventEmitter, Input, Output, inject, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CreateUser, update } from '../user.models';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  
  private readonly formBuilder = inject(FormBuilder);

  @Input({ required: true })
  titulo!: string;

  @Input()
  persona?: update;

  @Output()
  postfrom = new EventEmitter<update>();

  //Envia los datos de usuario a editar al formulario
  ngOnInit(): void {
    if (this.persona != undefined){
      this.form.patchValue(this.persona)
    }
  }

  form: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    firstName: ['', Validators.required],
    secondName: [''], // Campo opcional
    lastName: ['', Validators.required],
    secondLastName: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    brithDate: ['', Validators.required],
    estimatedValue: [0, [Validators.required, Validators.min(1)]],
    notes: [''], // Campo opcional
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['persona'] && this.persona) {
      this.form.patchValue(this.persona);
    }
  }

  save() {
    if (this.form.valid) {
      const updatedUser = this.form.value as update;
      this.postfrom.emit(updatedUser); // Emite los datos al componente padre
    } else {
      console.warn('Formulario no válido:', this.form.errors);
    }
  }
}
