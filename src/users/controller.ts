import {
  JsonController,
  Get,
  Param,
  Put,
  Body,
  Post,
  NotFoundError
} from "routing-controllers";
import User from "./entity";

@JsonController()
export default class UserController {
  @Get("/users/:id")
  getUser(@Param("id") id: number): Promise<User | undefined> {
    return User.findOne(id);
  }

  // @Get("/pages")
  // allPages(): PageList {
  //   return { pages: Object.values(Page) };
  // }

  @Get("/users")
  async allUsers() {
    const users = await User.find();
    return { users };
  }

  // @Put("/pages/:id")
  // updatePage(
  //   @Param("id") id: number,
  //   @Body() body: Partial<Page>
  // ): Promise<Page | undefined> {
  //   console.log(`Incoming PUT body param:`, body);
  //   return Page.findOne(id);
  // }

  @Put("/users/:id")
  async updateUser(@Param("id") id: number, @Body() update: Partial<User>) {
    const user = await User.findOne(id);
    if (!user) throw new NotFoundError("Cannot find page");

    return User.merge(user, update).save();
  }

  // @Post("/pages")
  // @HttpCode(201)
  // createPage(@Body() body: Page): Page {
  //   console.log(`Incoming POST body param:`, body);
  //   return body;
  // }

  // @Post("/users")
  // @HttpCode(201)
  // createUser(@Body() user: User) {
  //   return user.save();
  // }
  @Post("/users")
  async createUser(@Body() user: User) {
    const { password, ...rest } = user;
    const entity = User.create(rest);
    await entity.setPassword(password);
    return entity.save();
  }
}
