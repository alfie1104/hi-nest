import { IsNumber, IsOptional, IsString } from "class-validator";

//DTO를 만들고 class-validator를 적용시키면, 실시간으로 코드의 유효성을 체크할 수 있음(사용자가 입력한 내용들이 유효한지)
//IsOptional() 데코레이터로 속성을 optional로 정의 가능
export class CreateMovieDto {
    @IsString()
    readonly title : string;
    @IsNumber()
    readonly year : number;
    @IsOptional()
    @IsString({each:true})
    readonly genres : string[];
}