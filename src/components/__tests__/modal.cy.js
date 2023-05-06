import Modal from "../Modal.vue";

describe("Modal component tests", () => {
  const modalBodySelector = '[data-cy="modal-body"]';
  const modalContentSelector = '[data-cy="modal-content"]';
  const openButtonSelector = '[data-cy="open-button"]';
  const closeButtonSelector = '[data-cy="close-modal"]';

  it("opens and closes correctly", () => {
    cy.mount(Modal);
    cy.get(modalBodySelector).should("not.be.visible");
    cy.get(openButtonSelector).should("have.text", " Open Modal ").click();
    cy.get(modalBodySelector).should("be.visible");
    cy.get(modalContentSelector)
      .should("be.visible")
      .should("have.css", "background-color", "rgb(255, 255, 255)");
    cy.get(closeButtonSelector).click();
    cy.get(modalBodySelector).should("not.be.visible");
  });

  it("changes color in response to props", () => {
    cy.mount(Modal, { props: { color: "red" } });
    cy.get(openButtonSelector).click();
    cy.get(modalContentSelector)
      .should("be.visible")
      .and("have.css", "background-color", "rgb(255, 0, 0)");
  });
});
