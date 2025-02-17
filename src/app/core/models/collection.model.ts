export type WasteType = 'PLASTIC' | 'GLASS' | 'PAPER' | 'METAL';
export type CollectionStatus = 
  | 'PENDING'    // En attente
  | 'OCCUPIED'   // Occupée
  | 'IN_PROGRESS' // En cours
  | 'COMPLETED'  // Validée
  | 'REJECTED';  // Rejetée

export interface WasteItem {
  type: WasteType;
  estimatedWeight: number;  // en grammes
  actualWeight?: number;    // en grammes, rempli par le collecteur
  photos?: string[];  // URLs des photos
}

export interface Collection {
  id?: string;
  customerEmail: string;
  collectorEmail?: string;
  wasteItems: WasteItem[];
  totalEstimatedWeight: number;  // en grammes
  totalActualWeight?: number;    // en grammes
  status: CollectionStatus;
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
  scheduledDate: Date;
  scheduledTime: string;  // format "HH:mm"
  photos?: string[];      // URLs/Base64 des photos
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  rejectionReason?: string;
} 