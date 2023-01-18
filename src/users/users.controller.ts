import {Controller, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post('/auth/signup')
    createUser() : string {
        return '';
    }


}
