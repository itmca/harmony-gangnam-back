import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './schema/link.schema';
import { LinkServiceImpl } from './link.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Link.name, schema: LinkSchema }],
      'manito',
    ),
  ],
  providers: [
    {
      provide: 'LinkService',
      useClass: LinkServiceImpl,
    },
  ],
  exports: [
    {
      provide: 'LinkService',
      useClass: LinkServiceImpl,
    },
  ],
})
export class LinkModule {}
