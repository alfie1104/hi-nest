import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';


/*
  데코레이터를 이용해서 클래스에 함수기능을 추가함. Function on top of the class and they can do something for the class
  imports : 다른 Module을 가져옴
  Controller : url을 가져와서 함수를 실행함(express의 라우터와 같은 역할) -> Nest.js에서는 라우터를 셋팅할 필요가 없음
  Provider : Controller기능에 필요한 값들을 외부로 부터 받아서 사용할 수있도록 의존성 주입을 해줌
  Dependency Injection :  Provider에 있는 모든 것을 import해서 controller에 inject(주입)해줌. Controller에서는 type만 설정함으로써 사용 가능
*/

@Module({
    controllers : [MoviesController],
    providers : [MoviesService]
})
export class MoviesModule {}
