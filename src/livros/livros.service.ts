import { Body, Injectable } from '@nestjs/common';
import { Livros } from './entities/livros.entity';
import { LivrosController } from './livros.controller';

@Injectable()
export class LivrosService {
    private livros: Livros[] = [
        {
            id: 1,
            nome: "A vida de Mayra",
            categoria: "Comedia",
            preco: 100
        }
    ];

    create(livro : any){
        this.livros.push(livro)
        return `Livro cadastrado: ${livro.nome}`
    }

    findAll(){
    return this.livros
    }

    findOne(id : string){
        const livro_buscado = this.livros.find((livros : Livros) => livros.id == parseInt(id))
        return livro_buscado   
    }

    update(body : any){
    const id_informado = body.id;
    const index_livro_atualizar = this.livros.findIndex(arrLivro => arrLivro.id == id_informado)
    this.livros[index_livro_atualizar] = body
    return `Livro atualizado: ${body.nome}`
    }

    remove (id_informado : Number){
        const index_livro_atualizar = this.livros.findIndex(arrLivro => arrLivro.id == id_informado) 
        this.livros.splice(index_livro_atualizar, 1)
        return `Livro com ID ${id_informado} deletado!`
    }
}

