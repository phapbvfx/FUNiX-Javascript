"use strict";

class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }

  static async fetchData(country, category, pageSize, page) {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=f21185821b6b419192b91a8dfdd20041`;

      const response = await fetch(url).then((res) => res.json());
      if (response.status !== "ok")
        throw new Error("Cannot get data, please try again");
      return response;
    } catch (error) {
      console.log(error.message);
      return error;
    }
  }
}

class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
