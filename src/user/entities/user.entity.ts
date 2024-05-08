import { Evaluations } from 'src/lessons/entities/evaluations.entity';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 100 })
    name: string;
    @Column({ unique: true, length: 30 })
    email: string;

    @OneToOne(() => Evaluations, (evaluation) => evaluation.user)
    evaluations: Evaluations;
}