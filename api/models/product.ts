import { Schema, model, Document } from 'mongoose';

export interface ISize {
  ml: string;
  oz: string;
  stock: number;
}

export interface IPerfume extends Document {
  name: string;
  brand: string;
  description?: string;
  gender: 'Men' | 'Women' | 'Unisex';
  price: number;
  sizes: ISize[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  totalStock: number;
  releaseDate?: Date;
  images: string[];
}

const SizeSchema = new Schema({
  ml: {
    type: String,
    required: true,
  },
  oz: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
});

const PerfumeSchema = new Schema<IPerfume>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: ['Men', 'Women', 'Unisex'],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    sizes: {
      type: [SizeSchema],
      required: true,
    },
    notes: {
      top: {
        type: [String],
        default: [],
      },
      middle: {
        type: [String],
        default: [],
      },
      base: {
        type: [String],
        default: [],
      },
    },
    totalStock: {
      type: Number,
      required: true,
      min: 0,
    },
    releaseDate: {
      type: Date,
    },
    images: {
      type: [String],
      default: [],
      required: true,
    },
  },
  { timestamps: true, collection: 'products' }
);

PerfumeSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Perfume = model<IPerfume>('Perfume', PerfumeSchema);

export default Perfume;
