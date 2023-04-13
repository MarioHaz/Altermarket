it("link to the page correctly", () => {
  cy.visit("http://localhost:5173");
  cy.get(".addToCart").click({ multiple: true }); // add all elements to cart
  cy.get(".navbar-shopping-cart").click(); // see all elements in cart
  cy.get(".MyOrder")
    .find(".order p:last-child")
    .should("contain.text", "$17590");
  cy.get("#checkout").click(); // do click and crate the expected json file
});
