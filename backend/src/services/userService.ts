import { User, UserModel } from '../model/user';

export class UserService {
  // 유저 생성
  public async create(user: User): Promise<User> {
    let u = new UserModel(user);
    return await u.save();
  }

  // 유저 조회
  public async read(email: any): Promise<User | null> {
    const userData = await UserModel.findOne({email: email});
    return userData;
  }
}