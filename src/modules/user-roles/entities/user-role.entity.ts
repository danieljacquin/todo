import { Role } from "src/modules/roles/entities/role.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserRole {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.userRoles,{
        eager: true
    })
    user: User;

    @ManyToOne(() => Role, (role) => role.userRoles,{
        eager: true
    })
    role: Role;
}
