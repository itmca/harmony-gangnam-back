import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LinkService } from './link.service';
import { Link } from './schema/link.schema';

@Controller('link')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Get(':id')
  getOne(@Param('id') _id: string): Promise<Link> {
    return this.linkService.findOne(_id);
  }

  @Post()
  create(@Body() link: Link): string {
    this.linkService.create(link);
    return 'success';
  }
}
