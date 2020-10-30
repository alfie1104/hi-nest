import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies : Movie[] = []; //가짜 DB에서 획득한 Movie 리스트

    getAll(): Movie[]{
        return this.movies
    }

    getOne(id: number) : Movie{
        // 문자열 앞에 +를 붙임으로써 parseInt와 동일한 효과를 낼 수 있음
        const movie = this.movies.find(movie => movie.id === id)
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found.`)//NestJS가 제공하는 HttpException
        }
        return movie;
    }

    deleteOne(id : number) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData : CreateMovieDto){
        this.movies.push({
            id:this.movies.length + 1,
            ...movieData
        })

        return true
    }

    update(id:number, updateData : UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);

        this.movies.push({...movie, ...updateData})
    }
}
