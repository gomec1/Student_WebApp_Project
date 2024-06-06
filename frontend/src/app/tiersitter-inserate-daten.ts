// Interface für die Daten der Tiersitter-Inserate
export interface TiersitterInserateDaten {
  id: number;
  attributes: {
    titel: string;
    persoenliche_beschreibung: string;
    verfuegbarkeit: string;
    lohnkosten: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    bild: {
      data: BildDaten[];
    };
    user: {
      data: UserDaten;
    };
  };
}

interface BildDaten {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      small: BildFormat;
      thumbnail: BildFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  };
}

interface BildFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface UserDaten {
  id: number;
  attributes: {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    vorname: string;
    name: string;
    geburtsdatum: string;
    strasseNr: string;
    ort: string;
    rolle: string;
    telefonnummer: string;
    postleitzahl: string;
  };
}
