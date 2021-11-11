import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/common/guest';
import { UpdateGuestService } from 'src/app/services/update-guest.service';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css']
})
export class UpdateGuestComponent implements OnInit {

  guest = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    money: 0
  }

  submitted: boolean = false;
  submitted1: boolean = false;

  constructor(private updateGuestService: UpdateGuestService) { }

  ngOnInit(): void {
  }

  getGuest(id: number){
    this.updateGuestService.get(id).subscribe(
      data =>{
        this.guest=data;
        this.submitted = true;
      }
    )
  }

  updateGuest(money: number): void{
    const data ={
        id: this.guest.id,
        firstName: this.guest.firstName,
        lastName: this.guest.lastName,
        age: this.guest.age,
        money: money
    };

    this.updateGuestService.update(this.guest.id, this.guest).subscribe(
        reponse => {
          console.log("Merge update");
          this.submitted1=true;
        }
    )
  }

  
}
