import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne, OneToOne, JoinTable } from 'typeorm';
import { Lesson } from './lesson.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Evaluations extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    score: number;
    @CreateDateColumn()
    createAt: Date

    @Column()
    user_id: number
    @OneToOne(() => User, (other) => other.id, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    lesson_id: number
    @ManyToOne(() => Lesson, (lesson) => lesson.evaluations, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'lesson_id' })
    lesson: Lesson
}
