import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: '0.0.0.0',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'sherazkhan',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
};

export const dateSource = new DataSource(dataSourceOptions);
