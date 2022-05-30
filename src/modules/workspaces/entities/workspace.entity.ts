import { Task } from "src/modules/tasks/entities/task.entity";
import { TodoCategory } from "src/modules/todo-categories/entities/todo-category.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Workspace {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    cipdatedAt: Date

    @ManyToOne(() => User, (user)=> user.workspace, {
        eager: true
    })
    user: User;

    @OneToMany(() => TodoCategory, (todoCategory) => todoCategory.workspace)
    todoCategories: TodoCategory[];

    @OneToMany(() => Task, (task) => task.workspace)
    task: Task[];

}
