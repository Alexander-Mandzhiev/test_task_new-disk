import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Evaluations } from './evaluations.entity';

@Entity()
export class Lesson extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 100 })
    name: string;
    @Column({ length: 20 })
    code: string;

    @OneToMany(() => Evaluations, (evaluations) => evaluations.lesson)
    evaluations: Evaluations[]
}
