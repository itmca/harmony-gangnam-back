import { Body, Controller, Inject, Post, Query } from '@nestjs/common';
import { LinkService } from 'src/link/link.service';

@Controller('manito')
export class ManitoController {
  constructor(@Inject('LinkService') private linkService: LinkService) {}
  @Post()
  async createProgram(
    @Body() programInfo: Map<string, string>,
  ): Promise<{ adminLinkId: string; linkId: string }> {
    programInfo['type'] = 'admin';
    const adminLinkId = await this.linkService.create(programInfo);

    programInfo['type'] = 'participant';
    const linkId = await this.linkService.create(programInfo);

    return { adminLinkId, linkId };
  }
}
