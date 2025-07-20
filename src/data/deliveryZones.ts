export interface DeliveryZone {
  id: string;
  name: string;
  price: number;
}

export const deliveryZones: DeliveryZone[] = [
  { id: "kofar-kaura", name: "Kofar Kaura", price: 1000 },
  { id: "g-r-a", name: "GRA (Government Reserved Area)", price: 1500 },
  { id: "kofar-marusa", name: "Kofar Marusa", price: 1200 },
  { id: "kofar-sauri", name: "Kofar Sauri", price: 1000 },
  { id: "shinkafi", name: "Shinkafi", price: 1800 },
  { id: "kofar-durbi", name: "Kofar Durbi", price: 1200 },
  { id: "kofar-kwaya", name: "Kofar Kwaya", price: 1100 },
  { id: "batagarawa", name: "Batagarawa", price: 2000 },
  { id: "layout", name: "Layout Area", price: 1300 },
  { id: "kofar-guga", name: "Kofar Guga", price: 900 },
  { id: "tsanni", name: "Tsanni", price: 1700 },
  { id: "kofar-yandaka", name: "Kofar Yandaka", price: 1100 },
  { id: "dandagoro", name: "Dandagoro", price: 2000 },
  { id: "barhim", name: "Barhim Estate", price: 1500 },
  { id: "kofar-mata", name: "Kofar Mata", price: 1000 },
];

export const getDeliveryZoneById = (id: string): DeliveryZone | undefined => {
  return deliveryZones.find((zone) => zone.id === id);
};
