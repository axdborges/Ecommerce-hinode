export interface IProduct {
    url: string;
    title: string;
    price: number;
}

export interface ISection {
    title: string;
    items: IProduct[];
    toBuy: boolean;

}

export interface IPhoto {
    url: string;
    title: string;
    price?: number;
}
