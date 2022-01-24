import express, { Request, Response } from 'express';
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../authorization';
import { UserService } from '../services/userService';
import { User } from '../model/user';

const asyncify = require('express-asyncify');

const router = asyncify(express.Router());

// 유저 정보 요청
router.use('/profile', verifyToken);
router.get('/profile', async (request: Request, response: Response) => {
  const userService = new UserService();
  
  try{
    let email: string = response.locals['email'];

    const user: User | null = await userService.read(email);
    // 유저 없는 경우
    if(!user) {
      response.status(400).send('user not exist');
      return;   
    }

    response.status(200).send({ nickname: user.nickname, admin: user.admin });
  }catch(err) {
    response.status(400).send('user error');
  }
});

// 유저 로그인 요청
router.post('/login', async (request: Request, response: Response) => {
  const userService = new UserService();

  try{
    let email: string = request.body.email;
    let password: string = request.body.password;

    const user: User | null = await userService.read(email);
    if(!user) {
      // 이메일 주소 없음
      response.status(400).send('email not exist');
      return;
    }

    const result = await compare(password, user.password);
    if(!result) {
      // 비밀번호 불일치
      response.status(400).send('password incorrect');
      return;
    }
    
    // 유저 정보로 토큰 생성
    const token = jwt.sign(
      {
        email: email,
        admin: user.admin,
      },
      process.env.SECRET_KEY || 'secret_key',
      {
        expiresIn: '600m'
      }
    );
    console.log('user 있음')
    response.json({ 
      nickname: user.nickname,
      token: token,
      admin: user.admin
    });
  }catch(err) {
    response.status(400).send('login error');
  }
});

// 유저 회원가입 요청
router.post('/register', async (request: Request, response: Response) => {
  const userService = new UserService();

  let user: User = request.body;
  
  // 유저 암호 해쉬화
  user.password = await hash(user.password, 5);

  try{
    const data = await userService.create(user);

    if(data) {
      response.status(201).send('success');
    }else{
      response.status(400).send('register error');
    }
  }catch(err) {
    response.status(400).send('register error');
  }
});

export = router;