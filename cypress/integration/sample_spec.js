

//////// landing page test ///////////////////////////////


describe('landing page login  test', () => {
  it('Visits the landing page (login)', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.get('.container-fluid')
    cy.contains('Login').click()
  })
})
describe('landing page sign up test', () => {
  it('Visits the landing page (sign up)', () => {
    cy.visit('/')
    Cypress.on('uncaught:exception', (err, runnable) => false)
    cy.contains('Welcome')
    cy.contains('Sign up').click()
  })
})

// ////// landing page test ///////////////////////////////



// //////sign in page  test ///////////////////////////////

describe('sign in and sign out test Test', () => {
  it('clicking "sign in " navigates to sign in page and sign our take you back to home page ', () => {
    cy.visit('/')
    cy.contains('Login').click()
       // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/login')
    cy.contains('Welcome')
    cy.get('.h-screen')
    cy.get("input[name=email]").type("adham@gmail.com");
    cy.get("input[name=password]").type("adham123").type("{enter}");
    cy.location("pathname").should("include", "/controller");
    cy.contains('Recent activites')
    cy.contains('adham')
    cy.contains('Logout').click()
    cy.url().should('include', '/')
  })
})

/// userr demo test ///////
//explore page  test ///////////////////////////////

describe('explore pages Test', () => {
it('check that the about us page have conect team section  ', () => {
  cy.visit('/login')
cy.get("input[name=email]").type("adham@gmail.com");
cy.get("input[name=password]").type("adham123").type("{enter}")

cy.contains('Explore').click()
cy.url().should('include', '/Explore')
cy.contains('Make Offer').click()
cy.get("input[name=date]").type("1212-12-12");
cy.get("textarea[name=addtinal_details]").type("hello world !")
cy.contains("send offer").click()
cy.contains('Comments')
cy.contains('Comment').click()
cy.get("input[name=comment]").first().type("hello world !")
cy.get(".btn").first().click()
cy.contains("Like").first().click()


// about us 
cy.contains('About us').click()
cy.url().should('include', '/aboutus')
cy.contains('Connect Team')
cy.url().should('include', '/aboutus')


///////////// profile page test ///////////////////////////
cy.contains('Profile').click()
cy.url().should('include', '/controller')
cy.contains('Name')
cy.contains('Email')
cy.contains('Address')
cy.contains('Phone Number')
cy.contains('Recent activites')

///////////// profile page test ///////////////////////////

///////////// complaint page test ///////////////////////////
cy.contains('Complaints').click()
cy.url().should('include', '/Complain')
cy.get("input[name=username]").type("adham");
cy.get("input[name=companyName]").type("pythonholic");
cy.get("textarea[name=the_issue]").type("did not get the service")
cy.contains('submit').click()

///////////// complaint page test ///////////////////////////



})
})

///// sign up page//////////////

describe('landing page sign up  test', () => {
  it('sign up for company test', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.get('.container-fluid')
    cy.contains('Sign up').click()
    Cypress.on('uncaught:exception', (err, runnable) => false)
    cy.url().should('include', '/sign_up_user')
    cy.contains('Company Sign Up')
    cy.get("input[name=username]").first().type("python comapny");
    cy.get("input[name=email]").first().type("pythonholic22@gmail.com");
    cy.get("input[name=password]").first().type("1234567")
    cy.get("input[name=phonenumber]").first().type("07788665544")
    // upload file test
    const filepath = 'company-profile.png'
    cy.get('input[type="file"]').first().attachFile(filepath)
    cy.get('input[type="file"]').last().attachFile(filepath)
    cy.get('button[type="submit"]').first().click()
  })
  it('sign up for User test', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.get('.container-fluid')
    cy.contains('Sign up').click()
    Cypress.on('uncaught:exception', (err, runnable) => false)
    cy.url().should('include', '/sign_up_user')
    cy.contains('Company Sign Up')
    cy.contains('User').click();
    cy.contains('User').click();
    cy.get("input[name=username]").first().type("ashrf" ,{force: true});
    cy.get("input[name=email]").first().type("pythonholic22@gmail.com",{force: true});
    cy.get("input[name=password]").first().type("1234567",{force: true})
    cy.get("input[name=phonenumber]").first().type("07788665544",{force: true})
    cy.get('button[type="submit"]').first().click({force: true})
    cy.get('button[type="submit"]').first().click({force: true})
  })
})

///// sign up page//////////////


/// comapany login test /////


describe('explore pages Test', () => {
it('check that the about us page have conect team section  ', () => {
  cy.visit('/login')
cy.get("input[name=email]").type("python@gmail.com");
cy.get("input[name=password]").type("1234567").type("{enter}")


cy.url().should('include', '/controller')
cy.contains('Name')
cy.contains('Email')
cy.contains('Address')
cy.contains('Phone Number')
cy.contains('Recent activites')

cy.contains("Create Post").click()
cy.get("textarea[name=postcontent]").type("hello world !")
cy.contains("Publish").click()
cy.get("input").first().type("hello world !")
cy.contains('Comment').click()
cy.contains('Like').click()
cy.contains('Preview Offers').click()
cy.contains('Approve').click()
cy.contains('Reject').click()

})
})
