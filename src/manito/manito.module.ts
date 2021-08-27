import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { ParticipantController } from './participant/participant.controller';

@Module({
  controllers: [AdminController, ParticipantController],
})
export class ManitoModule {}
