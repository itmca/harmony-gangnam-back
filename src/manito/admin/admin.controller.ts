import { Controller, Get } from '@nestjs/common';

@Controller('manito/admin')
export class AdminController {
  @Get('result')
  getResult(): string {
    return 'admin result';
  }
}
