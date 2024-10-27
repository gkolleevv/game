import {Controller, Get} from "@nestjs/common";
import {GameService} from "./game.service";

@Controller('api/game')
export class GameController {

    constructor(private readonly gameService: GameService) {
    }

    @Get()
    getSymbols() {
        console.log('Pesho')
        return this.gameService.getSpinData();
    }
    //
    // @Get(':id') // GET /users/:id
    // findOne(@Param('id', ParseIntPipe) id: number) {
    //     return this.usersService.findOne(id)
    // }
    //
    // @Post() // POST /users
    // create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    //     return this.usersService.create(createUserDto)
    // }
    //
    // @Patch(':id') // PATCH /users/:id
    // update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    //     return this.usersService.update(id, updateUserDto)
    // }
    //
    // @Delete(':id') // DELETE /users/:id
    // delete(@Param('id', ParseIntPipe) id: number) {
    //     return this.usersService.delete(id)
    // }

}
