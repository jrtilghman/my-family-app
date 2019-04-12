import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Family } from "../family.model";
// import { Family } from "../family.model";

@Injectable({
  providedIn: "root"
})
export class AboutMeService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:2223/aboutMe";

  public getFamilyData(): Family[] {
    console.log("family ", this.http.get(this.url));
    let familyData: Family[];
    let response: any;
    this.http.get<any>(this.url).subscribe(data => {
      console.log("data ", data);
      familyData = data["family"];

      console.log("data2 ", data);
      console.log("data Family", data["family"]);
      console.log("response ", response);
      return data["family"];
    });
    console.log("familyData is", response);
    return familyData;
    // return this.http.get<any>(this.url);
  }
  public getFriendsData() {
    this.http.get(this.url);
  }
}
