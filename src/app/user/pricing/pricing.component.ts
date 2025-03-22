import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { apiConfig } from '../../config/api.config';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  whatsappNumber = signal<string>(apiConfig.whatsappNumber);
}
