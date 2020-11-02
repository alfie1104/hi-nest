import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

//describe : 테스트를 묘사함
describe('MoviesService', () => {
  let service: MoviesService;

  //beforeEach : 테스트를 하기 전에 실행됨
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  /*
    it : individual test
    it(테스트명, 테스트하고 싶은 부분을 테스트하는 함수)

    예) 2+2 = 4인지를 테스트
      it('should be 4', () => {
        expect(2+2).toEqual(4)
      })
  */
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
});
