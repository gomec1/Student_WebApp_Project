export interface NotificationItem {
  id: number;
  type: string;

  fromUser: {
    vorname: string;
    name: string;
    email: string;
    telefonnummer: string;
  };
  inserat: {
    title: string;
  };
}
