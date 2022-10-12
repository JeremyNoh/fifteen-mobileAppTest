export interface Bike {
  id: string;
  serial_number: string;
  coordinates: [number, number];
  in_order: boolean;
  service_status: number;
  battery_level: number;
}

export interface AllBikes {
  bikes: Bike[];
  total: number;
}

export const StatusBikes: {[k: number]: string} = {
  0: 'Inconnu',
  1: 'Libre',
  2: 'Reservé',
  3: 'Utilisé',
};
