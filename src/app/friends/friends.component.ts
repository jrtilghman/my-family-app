import { Component, OnInit } from "@angular/core";
import { Person } from "../person.model";

@Component({
  selector: "app-friends",
  templateUrl: "./friends.component.html",
  styleUrls: ["./friends.component.css"]
})
export class FriendsComponent implements OnInit {
  friends: Person[];

  constructor() {}

  ngOnInit() {
    this.friends = [
      {
        name: "Julius White",
        age: 38
      },
      {
        name: "Ron Taylor",
        age: 37
      }
    ];
  }
}
