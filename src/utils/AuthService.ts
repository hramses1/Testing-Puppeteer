// src/services/AuthService.ts

import { User } from '../models/common/LoginModel';

export class AuthService {
  private validUser: User = {
    username: 'validUser',
    password: 'validPassword'
  };

  public authenticate(user: User): boolean {
    return user.username === this.validUser.username && user.password === this.validUser.password;
  }
}
