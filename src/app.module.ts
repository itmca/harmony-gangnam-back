import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkModule } from './link/link.module';
import { ManitoModule } from './manito/manito.module';

@Module({
  imports: [LinkModule, ManitoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
