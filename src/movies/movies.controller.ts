import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

/*
    @Get() : express.js의 Get라우터와 같은 역할(express.js에서는 app.get(...)식으로 사용했음)
    
    Decorator는 실행하려는 함수와 붙어있어야함. 사이에 공백줄이 있으면 안됨

    Service : 비지니스 로직을 실행(실제로 functon을 갖는 부분)(Nest.JS아키텍처는 컨트롤러를 비즈니스로직과 분리하고 싶어함. 컨트롤러는 그냥 url에 대해 대응하는 부분)
*/
@Controller('movies')
export class MoviesController {
    @Get()
    getAll() : string {
        return "This will return all movies"
    }

    @Get("search")
    search(@Query('year') searchingYear : string){
        return `We are searching for a movie made after : ${searchingYear}`
    }

    //@Param 데코레이터를 이용해서 url에 있는 파라미터를 가져올 수 있음.
    @Get(":id")
    getOne(@Param("id") movieId : string) {
        return `This will return one movie with the id: ${movieId}`
    }
    
    //@Body 데코레이터를 이용해서 Post의 body값을 가져올 수 있음
    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete(":id")
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id ${movieId}`
    }

    /*
        Update시 통신방식으로 Put 혹은 Patch를 사용할 수 있다.
        Put을 사용하면 모든 항목을 다 업데이트 한다는 뜻이고,
        Patch를 사용하면 특정 항목만 업데이트 한다는 뜻이다.
    */
    @Patch(":id")
    patch(@Param('id') movieId:string, @Body() updateData){
        //객체를 return하면 json형식으로 전달함.
        //express.js에서는 json형식으로 return하기 위해 설정을 만져야했음
        return {
            updatedMovie:movieId,
            ...updateData
        }
    }
}
