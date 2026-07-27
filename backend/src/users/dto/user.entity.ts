import { IsString, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    userId!: number;

    @Column({unique: true})
    @IsString()
    @MinLength(3)
    username!: string;

    @Column()
    @IsString()
    @MinLength(6)
    password!: string;
}