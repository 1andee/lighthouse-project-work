// Converts a user-supplied string (password) into l33t sp33k

var password = process.argv[2];

function obfuscate(pw) {
  for (var i = 0; i < pw.length; i++) {
    pw = pw.replace("a", "4");
    pw = pw.replace("e", "3");
    pw = pw.replace("o", "0");
    pw = pw.replace("l", "1");
  };
  return pw;
};

console.log(obfuscate(password));
