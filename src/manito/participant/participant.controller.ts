import { Controller, Get } from '@nestjs/common';

@Controller('manito/participant')
export class ParticipantController {

  @Get('result')
  getResult(): string {
    return 'participant result';
  }
}
