import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity({ name: 'posts' })
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    name: string

    @Column()
    url: string

    @Column()
    published_at: Date

    @Column()
    vk_id: number
}