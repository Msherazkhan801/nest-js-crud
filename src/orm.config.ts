import { TypeOrmModule } from '@nestjs/typeorm';

export const config: TypeOrmModule = {
  type: 'postgres',
  host: '0.0.0.0',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'sherazkhan',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
