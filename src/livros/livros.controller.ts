import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { Livros } from './entities/livros.entity';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
    constructor(private readonly livrosService : LivrosService){}
    
    @Post('cadastro')
    create(@Body() livro_cadastrar){
        return this.livrosService.create(livro_cadastrar);
    }

    @Get()
    findAll(){
        return this.livrosService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id : string) {
        return this.livrosService.findOne(id);
    }

    @Patch('atualizar')
    update(@Body() livro_atualizar) {
        return this.livrosService.update(livro_atualizar)
    }

    @Delete('deletar/:id' )
    remove(@Param('id') id : Number){
        return this.livrosService.remove(id)
    }
}

