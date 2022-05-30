import { UserRole } from "src/modules/user-roles/entities/user-role.entity";
import { Workspace } from "src/modules/workspaces/entities/workspace.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import * as bcrypt from "bcrypt";
import { ApiProperty } from "@nestjs/swagger";
import { Task } from "src/modules/tasks/entities/task.entity";

@Entity()
export class User {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    lastName: string

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @ApiProperty()
    @UpdateDateColumn({ name: 'updated_at'})
    cipdatedAt: Date

    @OneToMany(() => UserRole, (userRole)=> userRole.user)
    userRoles: UserRole[];
    
    @OneToMany(() => Workspace, (workspace)=> workspace.user)
    workspace: Workspace[];
    
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
      if (!this.password) return;
  
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  
    async checkPassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
    }
}
