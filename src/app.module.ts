import {Module} from "@nestjs/common";
import {UsersModule} from "./users/users.module";
import {ReportsModule} from "./reports/reports.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/user.entity";
import {Report} from "./reports/report.entity";

@Module({
    imports: [UsersModule, ReportsModule,
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Wjdekdns1!',
        database: 'test',
        entities:[User, Report],
        synchronize:true,
    })],
})
export class AppModule {}