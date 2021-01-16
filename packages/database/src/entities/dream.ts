import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from 'typeorm'

@Entity({
  name: 'dreams',
})
export class Dream extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date

  @Column({ nullable: true })
  name?: string

  @Column({ type: 'text', nullable: true })
  body?: string
}
