import {isArray} from "util";

const fs = require("fs");

const storagePath = './storage';
const userPath = `${storagePath}/users.json`;

const initialUsers = {
  tanvi:{
    username:'Tanvi',
    pass:'125@tan'
  },
  tanishka:{
    username:'Tanishka',
    pass:'123@tan'
  }
};

export function initStorage(){
  if(!fs.existsSync(storagePath)) fs.mkdirSync(storagePath);
  if(!fs.existsSync(userPath)) setUsers(initialUsers);
}

export function getUser(username) {
  return getUsers() [username];
}

export function setUser(user){
  const users = getUsers();
  users[user.username] = user;
  setUsers(users);
}

function getUsers(){
  let users;
  if(fs.existsSync(userPath)){
    users = JSON.parse(fs.readFileSync(userPath).toString());
  }
  return users || {}
}

function setUsers(users){
  fs.writeFileSync(userPath, JSON.stringify(users, null,2))
}
