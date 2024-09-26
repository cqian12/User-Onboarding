describe ('Onboarding checks', function () {
    let nameInput = () => cy.get('input[name="name"]')
    let emailInput = () => cy.get('input[name="email"]')
    let pwInput = () => cy.get('input[name="pw"]')
    let tosInput = () => cy.get('[type="checkbox"]')
    let submitButton = () => cy.get('button[id="submit"]')
    
    this.beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('gets the name input and types a name in', () => {
        nameInput()
        .should('exist')
        .should('have.value','')
        .type('charles')
        .should('have.value','charles')
    })
    
    it('gets the email input and type an address in', () => {
        emailInput()
        .should('exist')
        .should('have.value','')
        .type('charles@charles.charles')
        .should('have.value','charles@charles.charles')
    })

    it('gets the password input and types one', () => {
        pwInput()
        .should('exist')
        .should('have.value','')
        .type('charles')
        .should('have.value','charles')
    })

    it('checks if TOS checkbox works', () => {
        tosInput()
        .should('exist')
        .check()
    })

    it('checks if submit button works',() => {
        nameInput().type('charles')
        emailInput().type('charles@charles.charles')
        pwInput().type('charles')
        tosInput().check()
        submitButton().should('not.be.disabled')
    })

    it('checks if submit button is disabled if a field is missing',() => {
        nameInput().type('charles')
        emailInput().type('charles@charles.charles')
        pwInput().type('charles')
        submitButton().should('be.disabled')
    })
})