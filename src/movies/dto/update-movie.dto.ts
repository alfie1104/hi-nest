import { PartialType } from "@nestjs/mapped-types";
//import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

//DTO를 만들고 class-validator를 적용시키면, 실시간으로 코드의 유효성을 체크할 수 있음(사용자가 입력한 내용들이 유효한지)
/*
//속성에 ?를 붙이면 not required값으로 설정됨.(없어도 에러를 보내지 않음)
//하지만 이렇게 하지 않고, @nestjs/mapped-types의 PartialType을 이용함으로써
//기존에 생성해둔 CreateMovieDto를 extends해서 활용가능

export class UpdateMovieDto{
    @IsString()
    readonly title? : string;
    @IsNumber()
    readonly year? : number;
    @IsString({each:true})
    readonly genres? : string[];
}
*/
export class UpdateMovieDto extends PartialType(CreateMovieDto){}