import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

/*
  데코레이터를 이용해서 클래스에 함수기능을 추가함. Function on top of the class and they can do something for the class
  Controller : url을 가져와서 함수를 실행함(express의 라우터와 같은 역할) -> Nest.js에서는 라우터를 셋팅할 필요가 없음
  Provider : 
*/

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
