import { ITaxpayer } from "../models/taxpayer.model";

export const taxpayersMockData: ITaxpayer[] = [
    {
        taxpayerId: 1,
        name: "Juan Perez",
        type: "Persona Juridica",
        status: "Activo",
        },
        {
        taxpayerId: 2,
        name: "Pedro Perez",
        type: "Persona Fisica",
        status: "Activo",
    }
  ];