import { User } from "src/modules/users/entities/user.entity";
import { Workspace } from "src/modules/workspaces/entities/workspace.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    desc: string;

    @ManyToOne(() => Workspace, (workspace) => workspace.task, {
        eager: true
    })
    workspace: Workspace;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    updateAt: Date

}
