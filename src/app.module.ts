import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Usuario } from './user/entities/user_entity';
import { UserModule } from './user/user.module';
import { CarteraModule } from './cartera/cartera.module';
import { Cartera } from './cartera/entities/cartera_entity';
import { CostoInicialModule } from './costo-inicial/costo-inicial.module';
import { CostosIniciales } from './costo-inicial/entities/costo-inicial_entity';
import { FacturaModule } from './factura/factura.module';
import { Factura } from './factura/entities/factura_entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-04.cleardb.com',
      port: 3306,
      username: 'bd417d2ffe5639',
      password: '6958013c',
      database: 'heroku_5378ecdc3fafcd4',
      entities: [Usuario, Cartera, CostosIniciales, Factura],
      synchronize: true,
    }),
    CarteraModule,
    CostoInicialModule,
    FacturaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
