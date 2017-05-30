// Converts a user-supplied string (password) into l33t sp33k

var oldPassword = process.argv[2];

function obfuscate(oldPassword) {

  for (var i = 0; i < oldPassword.length; i++) {
    oldPassword = oldPassword.replace("a", "4");
    oldPassword = oldPassword.replace("e", "3");
    oldPassword = oldPassword.replace("o", "0")
    oldPassword = oldPassword.replace("l", "1")
  }

  return oldPassword;
}

var newPassword = obfuscate(oldPassword);

console.log(newPassword);
