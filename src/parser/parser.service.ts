import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from "typeorm";
import { VK } from 'vk-io';
import { PostEntity } from './post.entity';
import { ParserDto } from './parser.dto';
import http from 'http';
import { response } from 'express';


@Injectable()
export class ParserService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {}

    async fetchData(id:number) {
        const vk = new VK({
            token: 'vk1.a.q_IncVtCwEIbSLubgnevrtCljk78AarJHZ66gJMGw_b2Nrs90_JdEbrb1znk8I-Fd77zBalmKGwFIsLD0KFgc8xQbkw_MhikK0qFj68AaiWH4mkNnYbyV8N9aLha6DBuJvZnWVZ8R40BVOEQKjR10OgXOFzavxdpsX1dczgq3zjFlSCZ6y0_QuZ4Zp2dGCeiVolSqlanb6ciFfOQLg6WdA'
        });
        let response: any = await vk.api.wall.get({
            owner_id: id
        });
        response = response.items.filter(v => v.text.length > 5)
        return response
    }

    async saveData(items) {
        const posts = this.postRepository.create()
        return this.postRepository.save(items)
    }
}
