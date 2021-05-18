import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homeForm!: FormGroup;
  zipCodes$ = this.localStorageService.zipCodes$;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      zipCode: new FormControl()
    });
  }

  onSubmit(): void {
    const zipCode = this.homeForm.get('zipCode')?.value;
    this.localStorageService.addZipCode(zipCode);
  }

}
