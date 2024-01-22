export interface Plant {
  userID?: string;
  plantID?: string;
  plantName: string;
  level: number;
  point: number;
  record?: PlantRecord[];
}

export interface PlantRecord {
  date: Date;
  contnet: string;
}
