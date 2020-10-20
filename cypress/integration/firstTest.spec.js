/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Sadewa Mukti Witjaksono')
        cy.get('[placeholder ="Email"][type="text"]').type('sadewamukti93@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('sadewamukti93@gmail.com')
        cy.get('#inputPassword2').type('mokek3001')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('sadewamukti93@gmail.com')
        cy.get('#exampleInputPassword1').type('mokek3001')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Sadewa Mukti Witjaksono')
        cy.get('[placeholder="Subject"]').type('BlackBoxTesting PPL')
        cy.get('[placeholder="Message"').type('Bismillah')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Sadewa Mukti')
        cy.get('#inputLastName').type('Witjaksono')
        cy.get('#inputEmail').type('sadewamukti93@gmail.com')
        cy.get('#inputWebsite').type('www.banyuwangi.com')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('sadewamukti93@gmail.com')
        cy.get('#inputPassword3').type('mokek3001')
        cy.get('.custom-checkbox').last().click()
    })

});