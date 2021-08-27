import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { LinkService } from './link.service';
import { Link } from './schema/link.schema';

@Controller('link')
export class LinkController {
  constructor(@Inject('LinkService') private linkService: LinkService) {}

  @Get(':id')
  async getOne(@Param('id') _id: string): Promise<Link> {
    return this.linkService.findOne(_id);
  }

  @Post()
  async create(@Body() info: Map<string, string>): Promise<{ id: string }> {
    const linkId = await this.linkService.create(info);
    return { id: linkId };
  }
}
