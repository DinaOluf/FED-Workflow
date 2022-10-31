describe("https://todaysfoodblog.netlify.app/", () => {
    it("can scroll latest posts", () => {
      cy.visit("https://todaysfoodblog.netlify.app/");
      cy.wait(5000);
      cy.get("#right-arrow").click();
    })

    it("can get home page by clicking logo", () => {
        cy.get(".header-title").click();
        cy.get("h1").contains("Welcome to the Today's Food Blog");
      })

    it("can click footer logo to get back to top", () => {
        cy.get(".plate-footer-icon").click();
        cy.wait(1000);
        cy.window().its('scrollY').should('equal', 0);
    })
  })
  
