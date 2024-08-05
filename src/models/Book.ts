import { Model } from 'objection';

class Book extends Model {
  static tableName = 'books';

  id!: number;
  name!: string;
  isBorrowed!: boolean;
  rating?: number;

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      isBorrowed: { type: 'boolean', default: false },
      rating: { type: 'number', nullable: true}
    }
  };
}

export default Book;
