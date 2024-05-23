import { TestBed } from "@angular/core/testing";

import { ServiceTiersitterInserateService } from "./service-tiersitter-inserate.service";

describe("ServiceTiersitterInserateService", () => {
  let service: ServiceTiersitterInserateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTiersitterInserateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
