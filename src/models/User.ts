import { Model } from 'objection';

class User extends Model {
  static tableName = 'users';

  id!: number;
  name!: string;
  email!: string;

  static jsonSchema = {
    type: 'object',
    required: ['name', 'email'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      email: { type: 'string', format: 'email', minLength: 1, maxLength: 255 }
    }
  };
}

export default User;
