import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Link, LinkSchema } from './schema/link.schema';
import { LinkService } from './link.service';

describe('LinkService', () => {
  let service: LinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkService],
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

    service = module.get<LinkService>(LinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();

    service.create({
      name: 'test',
    });

    jest.useFakeTimers();
  });
});
