import { UserRole } from "src/modules/user-roles/entities/user-role.entity";
import { Workspace } from "src/modules/workspaces/entities/workspace.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    cipdatedAt: Date

    @OneToMany(() => UserRole, (userRole)=> userRole.user)
    userRoles: UserRole[];
    
    @OneToMany(() => Workspace, (workspace)=> workspace.user)
    workspace: Workspace[];

}
