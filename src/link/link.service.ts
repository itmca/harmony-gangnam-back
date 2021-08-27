import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link, LinkDocument } from './schema/link.schema';

@Injectable()
export class LinkService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async create(link: Link): Promise<Link> {
    const createLink = new this.linkModel(link);
    return createLink.save();
  }

  async findOne(_id: string): Promise<Link> {
    const links = await this.linkModel.find({ _id }).exec();

    if (!Array.isArray(links) || links.length === 0)
      throw new NotFoundException();

    return links[0];
  }
}
