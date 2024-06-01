import { Injectable } from "@angular/core";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ServiceTiersitterInserateAuftraegeService {
  constructor(public http: HttpClient) {}

  getAllTierSitterInseratAuftraege(): Observable<
    TierSitterInseratAuftraegeDaten[]
  > {
    return this.http
      .get<{ data: TierSitterInseratAuftraegeDaten[] }>(
        "http://localhost:1337/api/inserat-ich-bin-tierbesitzers?populate=*"
      )
      .pipe(map((response) => response.data));
  }

  getTierSitterInseratAuftraegeById(
    id: number
  ): Observable<TierSitterInseratAuftraegeDaten> {
    const url = `http://localhost:1337/api/inserat-ich-bin-tierbesitzers/${id}?populate=*`;
    return this.http
      .get<{ data: TierSitterInseratAuftraegeDaten }>(url)
      .pipe(map((response) => response.data));
  }
}
