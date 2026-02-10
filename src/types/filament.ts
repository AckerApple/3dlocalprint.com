export interface FilamentInventoryItem {
  filament_type_id: string;
  location: string;
  spool_inventory: number;
}

export interface FilamentType {
  filament_type_id: string;
  number?: number | string;
  label?: string;
  manufacturer?: string;
  material_type?: string;
  color_name?: string;
  swatch_code?: string;
  qr_search_data?: string;
  barcode_search_data?: string[];
  hex?: string;
  url?: string;
}
