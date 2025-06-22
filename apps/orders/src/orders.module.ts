import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        MONGODB_URI: joi.string().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
    DatabaseModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
