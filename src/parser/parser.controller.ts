import { Body, Controller, Get, Param } from '@nestjs/common';
import { ParserDto } from './parser.dto';
import { ParserService } from './parser.service';
import { PostEntity } from './post.entity';

@Controller('parser')
export class ParserController {
    constructor(private readonly parserService: ParserService) {}

    @Get()
    async start(@Body() dto: ParserDto) {
        let items = this.parserService.fetchData(-89321406)
        this.parserService.saveData(items)
    }

}
