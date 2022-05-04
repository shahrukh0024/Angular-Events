export type TEvent = {
    id: number;
    name: string;
    date: string;
    time: string;
    price: string;
    imageUrl: string;
    location:TLocation;
  };

export type TLocation = {
    address: string;
    city: string;
    country:string;
};
    