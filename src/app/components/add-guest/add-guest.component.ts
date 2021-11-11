import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AddGuestService } from 'src/app/services/add-guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  guest = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    money: 0
  }

  submitted: boolean = false;

  constructor(private addGuestService: AddGuestService) { }

  ngOnInit(): void {
  }

  saveGuest(): void{
    const data ={
      id: this.guest.id,
      firstName: this.guest.firstName,
      lastName: this.guest.lastName,
      age:this.guest.age,
      money:this.guest.money
    }

    this.addGuestService.create(data).subscribe(
      response =>{
        console.log(response);
        this.submitted=true;
      },
      error => {
        console.log(error);
        
      });

  }

  newGuest(): void{
    this.submitted = false;
    this.guest ={
      id: 0,
      firstName: '',
      lastName: '',
      age: 0,
      money: 0
    };
  }

}
