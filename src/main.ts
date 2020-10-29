import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
  NestJS 어플리케이션은 main.ts에서 시작함.
  main.ts는 AppModule을 이용하는데 이때 사용되는 AppModule은 모든 것의 루트모듈 같은 것임
  ※ 모듈은 어플리케이션의 일부분(한 가지 역할을 하는 어플리케이션, 예: 사용자인증, 사진모듈, ...)
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //파이프는 express.js의 미들웨어와 유사한 역할을 함
  //ValidationPipie는 유효성을 검사함
  //transform옵션을 true로 하면 유저들이 보낸 데이터를 우리가 원하는 type(타입스크립트에 정의한 타입)으로 자동 변환해줌
  app.useGlobalPipes(
    new ValidationPipe({whitelist:true, forbidNonWhitelisted:true, transform:true})
  );
  await app.listen(3000);
}
bootstrap();
