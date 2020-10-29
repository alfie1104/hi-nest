import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies : Movie[] = []; //가짜 DB에서 획득한 Movie 리스트

    getAll(): Movie[]{
        return this.movies
    }

    getOne(id: string) : Movie{
        //return this.movies.find(movie => movie.id === parseInt(id))
        // 문자열 앞에 +를 붙임으로써 parseInt와 동일한 효과를 낼 수 있음
        return this.movies.find(movie => movie.id === +id)
    }

    deleteOne(id : string) : boolean {
        this.movies.filter(movie => movie.id !== +id);
        
        return true
    }

    create(movieData){
        this.movies.push({
            id:this.movies.length + 1,
            ...movieData
        })

        return true
    }
}
