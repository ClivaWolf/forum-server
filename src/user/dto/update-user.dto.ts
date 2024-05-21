import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {

    id: string

    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsEmail()
    email?: string;

    @IsString()
    about?: string;

    @IsNotEmpty()
    @IsString()
    password?: string;

    @IsNotEmpty()
    @IsString()
    avatar?: string;

    @IsNotEmpty()
    @IsString()
    role?: string;

    @IsNotEmpty()
    @IsDate()
    lastSeen?: Date;
}
