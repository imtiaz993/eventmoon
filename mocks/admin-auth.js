import { sign, wait, decode, JWT_SECRET, JWT_EXPIRES_IN } from "utils/jwt";

const users = [
  {
    id: "1",
    avatar: "/static/images/avatars/3.jpg",
    location: "San Francisco, USA",
    username: "admin",
    email: "admin@example.com",
    name: "Rachael Simons",
    jobtitle: "Lead Developer",
    password: "EventMoon1@",
    role: "admin",
    posts: "27",
    coverImg: "/static/images/placeholders/covers/5.jpg",
    followers: "6513",
    description: "Curabitur at ipsum ac tellus semper interdum.",
  },
];

class AuthApi {
  async login({ email, password }) {
    await wait(500);

    return new Promise((resolve, reject) => {
      try {
        const user = users.find((_user) => _user.email === email);

        if (!user || user.password !== password) {
          reject(new Error("Email and password combination does not match"));
          return;
        }

        const accessToken = sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        resolve(accessToken);
      } catch (err) {
        console.error(err);
        reject(new Error("Internal server error"));
      }
    });
  }

  me(accessToken) {
    return new Promise((resolve, reject) => {
      try {
        const { userId } = decode(accessToken);

        const user = users.find((_user) => _user.id === userId);

        if (!user) {
          reject(new Error("Invalid authorization token"));
          return;
        }

        resolve({
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          posts: user.posts,
          coverImg: user.coverImg,
          followers: user.followers,
          description: user.description,
        });
      } catch (err) {
        console.error(err);
        reject(new Error("Internal server error"));
      }
    });
  }
}

export const authApi = new AuthApi();
