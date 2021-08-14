import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto } from '../dto/create-link.dto';
import { Link, LinkDocument } from '../schemas/link.schema';

@Injectable()
export class LinkService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const createLink = new this.linkModel(createLinkDto);
    return createLink.save();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }
}
