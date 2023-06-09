import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that Im on the start page', () => {
  cy.visit("/");
});

Given('entered the letter {string}', (letter) => {
  cy.get("#search").type(letter);
});

When('I click on buy button of the first product', () => {
  cy.get(".content button").eq(0).click();
});

Then('{string} item should be added to cart', (amount) => {
  cy.get("#cart li")
    .contains(amount + "st")
    .should("exist");
});

Given('That {string} should be added to cart', (amount) => {
  cy.get("#cart li")
    .contains(amount + "st")
    .should("exist");

});
Given('I click on checkout', () => {
  cy.get("#cart button").click();
});

When('I enter {string} as my name', () => {
  cy.get("#name").click().type("Peterpan Gustavsson");
});

When('I enter {string} as my home adress', () => {
  cy.get("#street").click().type("Fifth Avenue");
});

When('I enter {string} as my postal code', () => {
  cy.get("#zip").click().type("402 25");
});

When('I enter {string} as my state', () => {
  cy.get("#city").click().type("New York City");
});

When('I enter {string} Card Number as my Card Number', () => {
  cy.get("#card-nr").click().type("403 1525 3525 2535");
});

When('I enter {string} Date of validation', () => {
  cy.get("#card-date").click().type("03/26");
});

When('I enter {string} as my CCV code', () => {
  cy.get("#card-ccv").click().type("979");
});

When('I click on purchase', () => {
  cy.get("#checkout button").click();
});
Then('alert {string} should be shown', () => {
  cy.on("window:alert", alert_message =>
    expect(alert_message).to.contains("paying 12345")
  );
});
Given('And I click on checkout', () => {
  cy.get("#cart button").click();
});

When('I enter as my name:', (table) => {
  let list = table.rawTable.map(x => x[0])
    .map(x => x === "space" ? " " : x);
  for (let str of list) {
    cy.log(str);
  }
});

When('I enter as my state:', () => {

});
When('I enter as my Card Number:', (table) => {
  cy.log(table, "table");
  let list = table.rawTable.map(x => x[0])
    .map(x => x === "space" ? " " : x);
  console.log(list, "list")
  for (let str of list) {
    cy.log("", str, typeof str);
    cy.get("#cart button").eq(1).click().type(str);
  }
});

When('I enter Date of validation:', (table) => {

});

When('I enter as my CCV code:', (table) => {

});

When('I click purchase', (table) => {

});



Then('alert "Please fill out this field"', () => {

});