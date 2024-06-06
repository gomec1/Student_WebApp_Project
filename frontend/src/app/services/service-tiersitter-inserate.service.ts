import { Injectable } from "@angular/core";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ServiceTiersitterInserateService {
  constructor(public http: HttpClient) {}
  // Methode um alle TiersitterInserate zu bekommen
  getAllTiersitterInserate(): Observable<TiersitterInserateDaten[]> {
    return this.http
      .get<{ data: TiersitterInserateDaten[] }>(
        "http://localhost:1337/api/inserat-ich-bin-tiersitters?populate=*"
      )
      .pipe(map((response) => response.data));
  }
  // Methode um die einzelnen TiersitterInserate zu bekommen
  getTiersitterInserateById(id: number): Observable<TiersitterInserateDaten> {
    const url = `http://localhost:1337/api/inserat-ich-bin-tiersitters/${id}?populate=*`;
    return this.http
      .get<{ data: TiersitterInserateDaten }>(url)
      .pipe(map((response) => response.data));
  }
}
