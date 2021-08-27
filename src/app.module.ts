import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkModule } from './link/link.module';
import { ManitoModule } from './manito/manito.module';

@Module({
  imports: [
    LinkModule,
    ManitoModule,
    MongooseModule.forRoot('mongodb://localhost/manito', {
      connectionName: 'manito',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
