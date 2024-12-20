export interface WeaponsModel {
    success: boolean;
    count:   number;
    total:   number;
    data:    Datum[];
}

export interface Datum {
    id:                 string;
    name:               string;
    image:              string;
    description:        string;
    attack:             Attack[];
    defence:            Attack[];
    scalesWith:         ScalesWith[];
    requiredAttributes: Attack[];
    category:           string;
    weight:             number;
}

export interface Attack {
    name:   string;
    amount: number;
}

export interface ScalesWith {
    name:     string;
    scaling?: string;
}