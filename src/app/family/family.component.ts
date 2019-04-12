import { Component, OnInit } from "@angular/core";
import { Family } from "../family.model";
import { AboutMeService } from "../services/aboutme.service";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.css"]
})
export class FamilyComponent implements OnInit {
  family: Family[];

  constructor(private aboutme: AboutMeService) {}

  ngOnInit() {
    // this.albumService
    //   .getAlbums()
    //   .subscribe(
    //     albums => (this.albumsArray = albums),
    //     error => console.log("Error: ", error)
    //   );

    // this.aboutme
    //   .getFamilyData()
    //   .subscribe(familaData => (this.family = familaData));
    console.log("getFamDataResult " + this.aboutme.getFamilyData());
    this.family = this.aboutme.getFamilyData();
    //.subscribe(familaData => (this.family = familaData));
  }
}
