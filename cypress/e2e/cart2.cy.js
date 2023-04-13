it("link to the page correctly", () => {
  cy.visit("http://localhost:5173");
  cy.get(".addToCart").first().click({ force: true });
  cy.get(".navbar-shopping-cart").click({ force: true });
  cy.get(".primary-button").click();
});
