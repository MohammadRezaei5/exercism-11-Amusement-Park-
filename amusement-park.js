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

///---///

// const tickets = {
//   "0H2AZ123": null,
//   "23LA9T41": "Verena Nardi"
// };

function ticketStatus(tickets, ticketId) {
  const name = tickets[ticketId];
  switch (name) {
    case undefined:
      return "unknown ticket id";
    case null:
      return "not sold";
    default:
      return `sold to ${name}`;
  }
}

// console.log(ticketStatus(tickets, "RE90VAW7"));
// console.log(ticketStatus(tickets, "0H2AZ123"));
// console.log(ticketStatus(tickets, "23LA9T41"));

///---///

// const tickets = {
//   "0H2AZ123": null,
//   "23LA9T41": "Verena Nardi"
// };

function simpleTicketStatus(tickets, ticketId) {
  const name = tickets[ticketId];
  switch (name) {
    case undefined:
    case null:
      return "invalid ticket !!!";
    default:
      return name;
  }
  // return tickets[ticketId] ?? 'invalid ticket !!!';
}

// console.log(simpleTicketStatus(tickets, "23LA9T41"));
// console.log(simpleTicketStatus(tickets, "0H2AZ123"));
// console.log(simpleTicketStatus(tickets, "RE90VAW7"));

///---///

// const visitorNew = {
//   name: "Verena Nardi",
//   age: 45,
//   ticketId: "H32AZ123",
//   gtc: {
//     signed: true,
//     version: "2.1"
//   }
// };

// const visitorOld = {
//   name: "Verena Nardi",
//   age: 45,
//   ticketId: "H32AZ123"
// };

function gtcVersion(visitor) {
  return visitor?.gtc?.version;
}

// console.log(gtcVersion(visitorNew));
// console.log(gtcVersion(visitorOld));
