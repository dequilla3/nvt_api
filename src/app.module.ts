import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocmoduleModule } from './docmodule/docmodule.module';
import { ProductModule } from './product/product.module';
import { ProductCatModule } from './product-cat/product-cat.module';
import { ProductUnitModule } from './product-unit/product-unit.module';
import { SkuModule } from './sku/sku.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    DocmoduleModule,
    ProductModule,
    ProductCatModule,
    ProductUnitModule,
    SkuModule,
  ],
})
export class AppModule {}
