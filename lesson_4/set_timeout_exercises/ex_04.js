function q() {};
function d() {};
function n() {};
function z() {};
function s() {};
function f() {};
function g() {};

setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();

/*
g
f
d
z
n
s
q

*/