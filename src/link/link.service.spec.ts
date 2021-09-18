import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { LinkService, LinkServiceImpl } from './link.service';
import { Link, LinkDetailValueType, LinkSchema } from './schema/link.schema';

describe('LinkService', () => {
  let service: LinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'LinkService',
          useClass: LinkServiceImpl,
        },
      ],
      imports: [
        MongooseModule.forRoot('mongodb://localhost/link', {
          connectionName: 'link',
        }),
        MongooseModule.forFeature(
          [{ name: Link.name, schema: LinkSchema }],
          'link',
        ),
      ],
    }).compile();

    service = module.get<LinkService>('LinkService');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    const linkDetail = new Map<string, LinkDetailValueType>();
    service.create(linkDetail);

    jest.useFakeTimers();
  });
});
