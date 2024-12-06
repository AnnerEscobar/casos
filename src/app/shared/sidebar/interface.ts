export interface Link {
  name: string;
  path: string | null;
  isOpen?: boolean; // Propiedad opcional
  children?: Link[]; // Arreglo de enlaces anidados
}

