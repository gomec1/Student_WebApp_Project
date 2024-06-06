// Interface für die Daten der Tier-Sitter-Inserat-Aufträge (Tierbesitzer)
export interface TierSitterInseratAuftraegeDaten {
  id: number;
  attributes: {
    titel: string;
    tierart: string;
    alter: string;
    zeitdauer_von_bis: string;
    beschreibung_wichtiger_infos: string;
    totalbetrag_chf: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    tierrasse: string;
    tiername: string;
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
      thumbnail: BildFormat;
      small: BildFormat;
      medium: BildFormat;
      large: BildFormat;
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
  path: null;
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
