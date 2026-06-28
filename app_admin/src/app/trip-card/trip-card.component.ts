import { Component, OnInit, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({ 
  selector: 'app-trip-card', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './trip-card.component.html', 
  styleUrl: './trip-card.component.css' 
}) 
export class TripCardComponent implements OnInit { 

  @Input('trip') trip: any; 

  constructor(private router: Router) {} 

  ngOnInit(): void { 
    // This helps you see if the data is actually reaching the component
    console.log('Trip Card received data:', this.trip);
  } 
  public editTrip(trip: Trip){
   localStorage.removeItem('tripCode');
   localStorage.setItem('tripCode', trip.code);
   this.router.navigate(['edit-trip']);
    }
  }