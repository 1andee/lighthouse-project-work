/*
Social Network Analysis

Goal:
To practise manipulating arrays and objects to solve a problem.

Tasks:
For the below dataset, write functions to solve the below tasks:
1) List everyone and for each of them, list the names of who they follow and who follows them
2) Identify who follows the most people
3) Identify who has the most followers
4) Identify who has the most followers over 30
5) Identify who follows the most people over 30
6) List those who follow someone that doesn't follow them back
7) List everyone and their reach (sum of # of followers and # of followers of followers)

*/

var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// 1) List everyone and for each of them, list the names of who they follow and who follows them

function showNames(data) {
  console.log('Exercise 1')
  console.log('List everyone, including their names, who they follow, and who follows them')
  for (i in data) {
    console.log('----------------------')
    console.log('User:', data[i].name);
    printFollowing(i);
    printFollowers(i)
  };
};

// List who they follow
function printFollowing(arr) {
  console.log('Follows:')
  let i = data[arr].follows;

  i.forEach(function(element) {
    console.log(`- ${data[element].name}`);
  });
};

// List who follows them
function printFollowers(element) {
  console.log('Followed By:');

  // Iterate through every user
  for (k in data) {
    let usersFollowing = data[k].follows;
    usersFollowing.find(lookupUserId);

    function lookupUserId(element) {
      if (element === i) {
        console.log(`- ${data[k].name}`);
      };
    };
  };
};

showNames(data);

// 2) Identify who follows the most people

function countFollowers(data) {
  topIdCount = 0;
  for (i in data) {
    if (data[i].follows.length > topIdCount) {
      topName = data[i].name;
      topIdCount = data[i].follows.length;
    };
  };
  console.log('######################')
  console.log('Exercise 2')
  console.log('Who follows the most people?')
  console.log(`${topName}, who follows ${topIdCount} users`);
};

countFollowers(data);

// 3) Identify who has the most followers

function tallyFollowers(data) {

  console.log('######################')
  console.log('Exercise 3')
  console.log('Identify who has the most followers:')

  followTally = {};

  // Iterate through every user
  for (i in data) {
    var currentUser = data[i].follows;

    // Increments follower count, or sets to 1 if user isn't stored in object
    currentUser.forEach(function(element) {
      var name = data[element].name;
      if (followTally[name] == undefined) {
        followTally[name] = 1;
      } else {
        followTally[name]++;
      };
    });
  };

  returnSort(followTally);

};

// Sort values in object
function returnSort(object) {
  var sortable = [];
  for (var x in object) {
    sortable.push([x, object[x]]);
  };

  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });

  console.log(sortable);
};

tallyFollowers(data);

// 4) Identify who has the most followers over 30


function tallyFollowersThirtyPlus(data) {

  console.log('######################')
  console.log('Exercise 4')
  console.log('Identify who has the most followers over age 30:')

  followTally = {};

  // Iterate through every user
  for (i in data) {
    var currentUser = data[i];
    var currentUserFollowing = data[i].follows;
    // Check if User's age is > 30
    if (currentUser.age > 30) {
      // Increments follower count, or sets to 1 if user isn't stored in object
      currentUserFollowing.forEach(function(element) {
        var name = data[element].name;
        if (followTally[name] == undefined) {
          followTally[name] = 1;
        } else {
          followTally[name]++;
        };
      });
    };
  };

  returnSort(followTally);

};

tallyFollowersThirtyPlus(data);

// 5) Identify who follows the most people over 30

// 6) List those who follow someone that doesn't follow them back

// 7) List everyone and their reach (sum of # of followers and # of followers of followers)
