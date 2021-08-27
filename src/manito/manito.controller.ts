import { Body, Controller, Inject, Post, Query } from '@nestjs/common';
import { LinkService } from 'src/link/link.service';

@Controller('manito')
export class ManitoController {
  constructor(@Inject('LinkService') private linkService: LinkService) {}
  @Post()
  async createProgram(
    @Body('start') start: string,
    @Body('end') end: string,
  ): Promise<{ linkId: string }> {
    const linkInfo = new Map<string, string>(
      Object.entries({
        start,
        end,
      }),
    );
    console.log(`start : ${start}, end : ${end}`);
    const linkId = await this.linkService.create(linkInfo);
    return { linkId };
  }
}
