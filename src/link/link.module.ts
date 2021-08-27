import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './schema/link.schema';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Link.name, schema: LinkSchema }],
      'link',
    ),
  ],
  providers: [LinkService],
  controllers: [LinkController],
})
export class LinkModule {}
