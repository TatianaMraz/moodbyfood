import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreateIngredientDto {
  name_cs: string;
  name_en?: string | null;
  name_la?: string | null;
  protein_g?: string | null;
  fat_g?: string | null;
  carbs_total_g?: string | null;
  sugar_g?: string | null;
  energy_kcal?: number | null;
}

@Injectable({ providedIn: 'root' })
export class IngredientService {
  private baseUrl = 'http://127.0.0.1:8000/api/ingredients/';

  constructor(private http: HttpClient) {}

  create(dto: CreateIngredientDto): Observable<any> {
    return this.http.post(this.baseUrl, dto);
  }
}
