import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OptionQuestion } from './option-question';
import { Session } from './session';

@Entity('question')
export class Question {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 500 })
    question: string

    @Column({ length: 500, nullable: true })
    text: string

    @Column()
    type: number //! 0 = rellenar ; 1 = ordenar

    @Column({ length: 300, nullable: true })
    img_url: string

    @ManyToOne(type => Session, session => session.question)
    session: Session

    @OneToMany(type => OptionQuestion, optionQuestion => optionQuestion.question)
    option_question: OptionQuestion[]

}