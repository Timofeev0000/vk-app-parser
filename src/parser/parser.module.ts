import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParserController } from './parser.controller';
import { PostEntity } from './post.entity';
import { ParserService } from './parser.service';

@Module({
  controllers: [ParserController],
  providers: [ParserService],
  imports: [TypeOrmModule.forFeature([PostEntity])]
})
export class ParserModule {}
