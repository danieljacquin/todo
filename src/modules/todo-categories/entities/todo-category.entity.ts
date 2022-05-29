import { Category } from "src/modules/categories/entities/category.entity";
import { Workspace } from "src/modules/workspaces/entities/workspace.entity";
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Entity } from "typeorm";

@Entity()
export class TodoCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    cipdatedAt: Date

    @ManyToOne(() => Category, (category) => category.todoCategories, {
        eager: true
    })
    category: Category;

    @ManyToOne(() => Workspace, (workspace) => workspace.todoCategories,{
        eager: true
    })
    workspace: Workspace;
    
}
