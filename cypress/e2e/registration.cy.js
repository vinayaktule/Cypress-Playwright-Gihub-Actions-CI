/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

describe('Registration Flow', () => {
    let password = faker.internet.password();

    it('should fill registration details', () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
        cy.get("#input-firstname").type(faker.person.firstName());
        cy.get("#input-lastname").type(faker.person.lastName());
        cy.get("#input-email").type(faker.internet.email());
        cy.get("#input-telephone").type(faker.phone.number());
        cy.get("#input-password").type(password);
        cy.get("#input-confirm").type(password);
        cy.get('input[type="checkbox"]').check();
        cy.get("input[type='submit']").click();

        cy.get("h1").should('have.text', 'Your Account Has Been Created!');
        expect(cy.get('h1').should('have.text', 'Your Account Has Been Created!'));
        cy.contains("Your Account Has Been Created!").should.exist;
    });
});