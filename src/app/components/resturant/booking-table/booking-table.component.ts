import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements OnInit {
  title = 'Reservation Form';
  bookingForm = this.fb.group({
    name: [''],
    capacity: [''],
    tableno: [''],
    time: ['']
  })
  submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


  }

  get f() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    alert('Succes\n\n Your Booking is confirm for table no ' + JSON.stringify(this.bookingForm.value));

  }
}


