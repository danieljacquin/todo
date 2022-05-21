import { TodoCategory } from "src/modules/todo-categories/entities/todo-category.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    cipdatedAt: Date

    @OneToMany(() => TodoCategory, (todoCategory) => todoCategory.category)
    todoCategories: TodoCategory[];

}
