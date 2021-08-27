import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link, LinkDocument } from './schema/link.schema';

type LinkInfoValue = string | Date;

export interface LinkService {
  create(link: Map<string, LinkInfoValue>): Promise<string>;
  findOne(_id: string): Promise<Link>;
}

@Injectable()
export class LinkServiceImpl {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async create(info: Map<string, string | Date>): Promise<string> {
    const linkDocument = new this.linkModel({ info });
    const createdLink = await linkDocument.save();
    return createdLink._id;
  }

  async findOne(_id: string): Promise<Link> {
    const links = await this.linkModel.find({ _id }).exec();

    if (!Array.isArray(links) || links.length === 0)
      throw new NotFoundException();

    return links[0];
  }
}
