// look back again 🌹❤😒

function createVisitor(name, age, ticketId) {
  const visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  };
  return visitor;
}

// console.log(createVisitor("Verena Nardi", 45, "H32AZ123"));

///---///

// const visitor = {
//   name: "Verena Nardi",
//   age: 45,
//   ticketId: "H32AZ123"
// };

function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

// console.log(revokeTicket(visitor));
