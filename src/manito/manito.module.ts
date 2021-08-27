import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { ParticipantController } from './participant/participant.controller';
import { ManitoController } from './manito.controller';
import { LinkModule } from 'src/link/link.module';

@Module({
  controllers: [AdminController, ParticipantController, ManitoController],
  imports: [LinkModule],
})
export class ManitoModule {}
