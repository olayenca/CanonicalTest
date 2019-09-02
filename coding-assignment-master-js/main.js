import { people } from "./data1";
import { people2 } from "./data2";
import { people3 } from "./data3";

const exercise1 = displayname => {
  const arr = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].is_team) {
      for (let person of people[i].members) {
        if (person.displayname === displayname) {
          arr.push(people[i].displayname);
        }
      }
    }
  }
  return arr;
};

console.log(exercise1("Alice"));

const exercise2 = displayname => {
  const arr = [];
  for (let i = 0; i < people2.length; i++) {
    if (people2[i].is_team) {
      for (let person of people2[i].members) {
        if (person2.displayname === displayname) {
          arr.push(peopl2e[i].displayname);
        }
      }
    }
  }
  return arr;
};

console.log(exercise1("Charlie"));

const arrs = [];
const get_people = team => {
  for (let i = 0; i < people2.length; i++) {
    if (people2[i].displayname === team) {
      for (let members of people2[i].members) {
        if (!members.is_team) {
          arrs.push(members.displayname);
        } else {
          get_people(members.displayname);
        }
      }
    }
  }
  return arrs;
};

console.log(get_people("The C-Team"));

const arrs1 = [];
const get_members = person => {
  while (arrs1.length < 7) {
    for (let i = 0; i < people3.length; i++) {
      if (people3[i].displayname === person) {
        for (let member of people3[i].members) {
          if (!member.is_team) {
            arrs1.push(member.displayname);
          } else {
            get_members(member.displayname);
          }
        }
      }
    }
  }
  return arrs1;
};

console.log(get_members("The C-Team"));
