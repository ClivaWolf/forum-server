import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    about: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsString()
    avatar: string;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsDate()
    lastSeen: Date;
}
