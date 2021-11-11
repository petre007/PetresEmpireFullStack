import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/common/guest';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css']
})
export class GuestsListComponent implements OnInit {

  guests: Guest[] | undefined;
  

  constructor(private guestListService: GuestService) { }

  ngOnInit(): void {
    this.listGuest();
  }

  

  listGuest(): void{
    this.guestListService.getGuestsList().subscribe(
      data => {
        this.guests = data;
      }
    )
  }

  deleteGuest(id: number|undefined): void{
    this.guestListService.delete(id);
  }
  
}
