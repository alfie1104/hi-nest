import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
  NestJS 어플리케이션은 main.ts에서 시작함.
  main.ts는 AppModule을 이용하는데 이때 사용되는 AppModule은 모든 것의 루트모듈 같은 것임
  ※ 모듈은 어플리케이션의 일부분(한 가지 역할을 하는 어플리케이션, 예: 사용자인증, 사진모듈, ...)
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
