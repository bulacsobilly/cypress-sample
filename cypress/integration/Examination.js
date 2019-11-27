it("Login Valid Credentials", () => {
	cy.visit("https://testorg-595.velpic.net/#login");

// insert Username
cy.get('#control-label-userName')
.type('billyb').should('have.value', 'billyb')

// insert Password
cy.get('#control-label-password')
.type('Mouse@123').should('have.value', 'Mouse@123')

// click Login
cy.get('.btn-block').click()
});

it("Login Invalid Credentials", () => {
	cy.visit("https://testorg-595.velpic.net/#login");

// insert Username
cy.get('#control-label-userName')
.type('invalidUsername').should('have.value', 'invalidUsername')

// insert Password
cy.get('#control-label-password')
.type('Mouse@123').should('have.value', 'Mouse@123')

// click Login
cy.get('.btn-block').click()

//check Validation
cy.get('.alert-error')
.should('have.text', 'Incorrect username or password. Please enter a valid username and password then try again.')
});


