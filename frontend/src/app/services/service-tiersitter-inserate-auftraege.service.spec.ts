import { TestBed } from "@angular/core/testing";

import { ServiceTiersitterInserateAuftraegeService } from "./service-tiersitter-inserate-auftraege.service";

describe("ServiceTiersitterInserateAuftraegeService", () => {
  let service: ServiceTiersitterInserateAuftraegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTiersitterInserateAuftraegeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
