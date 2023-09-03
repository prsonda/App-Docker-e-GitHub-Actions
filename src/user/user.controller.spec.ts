import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn((user) => ({
              id: 1,
              name: user.name,
              email: user.email,
              password: 'hashedPassword',
              createdAt: new Date(),
              updatedAt: new Date(),
            })),
            update: jest.fn((id, updateUserDto) => ({
              id,
              name: updateUserDto.name,
              email: updateUserDto.email,
              password: 'hashedPassword',
              createdAt: new Date(),
              updatedAt: new Date(),
            })),
            findAll: jest.fn(() => [
              {
                id: 1,
                name: 'User 1',
                email: 'user1@example.com',
                password: 'hashedPassword',
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              {
                id: 2,
                name: 'User 2',
                email: 'user2@example.com',
                password: 'hashedPassword',
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ]),
            findOne: jest.fn((user) => ({
              id: 1,
              name: 'User 1',
              email: 'user1@example.com',
              password: 'hashedPassword',
              createdAt: new Date(),
              updatedAt: new Date(),
            })),
            remove: jest.fn((id) => ({
              id: id,
            })),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should create a user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };

    const createdUser = await controller.create(userData);

    expect(createdUser).toBeDefined();
    expect(createdUser.name).toEqual(userData.name);
    expect(createdUser.email).toEqual(userData.email);
    expect(userService.create).toHaveBeenCalledWith(userData);
    expect(userService.create).toHaveBeenCalledTimes(1);
    expect(userService.create).toHaveReturned();
    expect(userService.create).toHaveReturnedTimes(1);
    expect(userService.create).toHaveReturnedWith(createdUser);
    expect(userService.create).toHaveLastReturnedWith(createdUser);
    expect(userService.create).toHaveNthReturnedWith(1, createdUser);
    expect(userService.create).toHaveReturnedTimes(1);
  });

  it('should update a user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@email.com',
      password: 'password123',
    };

    const updatedUser = await controller.update(1, userData);

    expect(updatedUser).toBeDefined();
    expect(updatedUser.name).toEqual(userData.name);
    expect(updatedUser.email).toEqual(userData.email);
    expect(userService.update).toHaveBeenCalledWith(1, userData);
    expect(userService.update).toHaveBeenCalledTimes(1);
    expect(userService.update).toHaveReturned();
    expect(userService.update).toHaveReturnedTimes(1);
    expect(userService.update).toHaveReturnedWith(updatedUser);
    expect(userService.update).toHaveLastReturnedWith(updatedUser);
    expect(userService.update).toHaveNthReturnedWith(1, updatedUser);
    expect(userService.update).toHaveReturnedTimes(1);
  });

  it('should find all users', async () => {
    const users = await controller.findAll();

    expect(users).toBeDefined();
    expect(userService.findAll).toHaveBeenCalledTimes(1);
    expect(userService.findAll).toHaveReturned();
    expect(userService.findAll).toHaveReturnedTimes(1);
    expect(userService.findAll).toHaveReturnedWith(users);
    expect(userService.findAll).toHaveLastReturnedWith(users);
    expect(userService.findAll).toHaveNthReturnedWith(1, users);
    expect(userService.findAll).toHaveReturnedTimes(1);
  });

  it('should find one user', async () => {
    const user = await controller.findOne(1);

    expect(user).toBeDefined();
    expect(userService.findOne).toHaveBeenCalledWith(1);
    expect(userService.findOne).toHaveBeenCalledTimes(1);
    expect(userService.findOne).toHaveReturned();
    expect(userService.findOne).toHaveReturnedTimes(1);
    expect(userService.findOne).toHaveReturnedWith(user);
    expect(userService.findOne).toHaveLastReturnedWith(user);
    expect(userService.findOne).toHaveNthReturnedWith(1, user);
    expect(userService.findOne).toHaveReturnedTimes(1);
  });

  it('should delete a user', async () => {
    const user = await controller.remove(1);

    expect(user).toBeDefined();
    expect(userService.remove).toHaveBeenCalledWith(1);
    expect(userService.remove).toHaveBeenCalledTimes(1);
    expect(userService.remove).toHaveReturned();
    expect(userService.remove).toHaveReturnedTimes(1);
    expect(userService.remove).toHaveReturnedWith(user);
    expect(userService.remove).toHaveLastReturnedWith(user);
    expect(userService.remove).toHaveNthReturnedWith(1, user);
    expect(userService.remove).toHaveReturnedTimes(1);
  });
});
