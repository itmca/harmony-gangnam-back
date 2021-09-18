import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link, LinkDetailValueType, LinkDocument } from './schema/link.schema';

export interface LinkService {
  create(linkDetail: Map<string, LinkDetailValueType>): Promise<string>;

  findById(_id: string): Promise<Link>;
}

@Injectable()
export class LinkServiceImpl implements LinkService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {
  }

  async create(info: Map<string, LinkDetailValueType>): Promise<string> {
    const linkDocument = new this.linkModel({ info });
    const createdLink = await linkDocument.save();
    return createdLink._id;
  }

  async findById(_id: string): Promise<Link> {
    const links = await this.linkModel.find({ _id }).exec();

    if (!Array.isArray(links) || links.length === 0)
      throw new NotFoundException();

    return links[0];
  }
}
