export interface Parkingplace {
  documentId?: string;
  city: string;
  zipCode: number;
  street: string;
  houseNumber: string;
  creationDateTime: any;
  pricePerHour: number;
  description: string;
  pictureSrc?: string;
  ownerUserId?: string;
  imageUrl?: string;
  isPublic: boolean;
  isWallBox: boolean;

  bookableTimings?: {
    startDateTime: any;
    endDateTime: any;
  }[];
  bookedTimings?: {
    startDateTime: any;
    endDateTime: any;
  }[];
}

