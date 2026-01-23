import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IngredientService } from '../../../services/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  standalone: false,
  templateUrl: './add-ingredient.html',
  styleUrl: './add-ingredient.scss',
})
export class AddIngredient {
  saving = false;
  errorMsg = '';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ingredientService: IngredientService
  ) {
    this.form = this.fb.group({
      name_cs: ['', Validators.required],
      protein_g: ['0'],
      fat_g: ['0'],
      sugar_g: ['0'],
      energy_kcal: [0],
    });
  }

  submit(): void {
    // console.log('form status', this.form.status, this.form.value);

    this.errorMsg = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    this.ingredientService.create(this.form.getRawValue() as any).subscribe({
      next: () => {
        this.saving = false;
        this.form.reset({
          name_cs: '',
          protein_g: '0',
          fat_g: '0',
          sugar_g: '0',
          energy_kcal: 0,
        });
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error ? JSON.stringify(err.error) : 'Failed to save';
      },
    });
  }
}
