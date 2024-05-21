import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date



    @Column()
    name?: string;

    @Column()
    email?: string;

    @Column()
    about?: string;

    
    @Column()
    role?: string;
    
    @Column()
    avatar?: string;
    
    @Column()
    password?: string;

    @Column()
    lastSeen?: Date;
}
