

//////// landing page test ///////////////////////////////


  describe('My secound Test', () => {
    it('Visits the landing page', () => {
      cy.visit('/')
    })
  })

  describe('My third Test', () => {
    it('finds the content "welcome"', () => {
      cy.visit('/')
  
      cy.contains('Welcome')
    })
  })
  describe('My third Test', () => {
    it('finds the content "login"', () => {
      cy.visit('/')
  
      cy.contains('login')
    })
  })
  describe('My third Test', () => {
    it('finds the content "signup"', () => {
      cy.visit('/')
  
      cy.contains('Sign Up')
    })
  })
 
  describe('My third Test', () => {
    it('click the content "signup"', () => {
      cy.visit('/')
  
      cy.contains('Sign Up').click()
    })
  })

  describe('My third Test', () => {
    it('click the content "login"', () => {
      cy.visit('/')
  
      cy.contains('login').click()
    })
})


describe(' Css test landing page ', () => {
  it('Gets, check class in landing page types and asserts', () => {
    cy.visit('/')
    cy.get('.container-fluid')
  })
})
////// landing page test ///////////////////////////////



//////sign in page  test ///////////////////////////////

describe('sign in Test', () => {
    it('clicking "sign in " navigates to sign in page ', () => {
      cy.visit('/')
  
      cy.contains('login').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/login')
    })
  })



  describe('test login welcome',()=>{
    it ('check if welcome apperas on login page',()=>{
      cy.visit('/')
      cy.contains('login').click()
      cy.contains('Welcome')

    })

  })
  describe('test login button',()=>{
    it ('check if login page has login button',()=>{
      cy.visit('/')
      cy.contains('login').click()
      cy.contains('Login').click()

    })

  })

describe(' Css test login page ', () => {
  it('Gets, check class in login page types and asserts', () => {
    cy.visit('/login')

    cy.get('.h-screen')
  })
})

describe(' test login  ', () => {
  it('with correct credtionals', () => {
    cy.visit('/login')
    cy.get("input[name=email]").type("adham@gmail.com");
  cy.get("input[name=password]").type("adham123").type("{enter}");
  cy.location("pathname").should("include", "/controller");
  })
})
describe(' test login2  ', () => {
  it('with wrong credtionals', () => {
    cy.visit('/login')
    cy.get("input[name=email]").type("adham@a.com");
  cy.get("input[name=password]").type("adham123").type("{enter}");
  cy.location("pathname").should("include", "/");
  })
})
 

////sign in page  test ///////////////////////////////


////controller page  test ///////////////////////////////

describe('controller page Test', () => {
    it('check if controller page has my story  ', () => {
      cy.visit('/login')
    cy.get("input[name=email]").type("adham@gmail.com");
  cy.get("input[name=password]").type("adham123").type("{enter}")
  
      cy.contains('My Story')
  

    })
  })
describe('controller page Test2', () => {
    it('check if controller page has Recent activites ', () => {
      cy.visit('/login')
    cy.get("input[name=email]").type("adham@gmail.com");
  cy.get("input[name=password]").type("adham123").type("{enter}")
  
      cy.contains('Recent activites')
  

    })
  })
describe('controller page Test3', () => {
    it('test if the user name matches the expected user name ', () => {
      cy.visit('/login')
    cy.get("input[name=email]").type("adham@gmail.com");
  cy.get("input[name=password]").type("adham123").type("{enter}")
  
      cy.contains('adham')
  

    })
  })

describe('controller page Test4', () => {
    it('test the logout button  ', () => {
      cy.visit('/login')
    cy.get("input[name=email]").type("adham@gmail.com");
  cy.get("input[name=password]").type("adham123").type("{enter}")
  
  cy.contains('Logout').click()
  cy.url().should('include', '/')

    })
  })






////controller page  test ///////////////////////////////

////aboutus page  test ///////////////////////////////

describe('about us page Test4', () => {
      it('test if clicking the about us  button on the header will take you to about us page  ', () => {
        cy.visit('/login')
      cy.get("input[name=email]").type("adham@gmail.com");
    cy.get("input[name=password]").type("adham123").type("{enter}")
    
    cy.contains('About us').click()
    cy.url().should('include', '/aboutus')
  
      })
    })

    describe('about us page Test5', () => {
      it('check that the about us page have conect team section  ', () => {
        cy.visit('/login')
      cy.get("input[name=email]").type("adham@gmail.com");
    cy.get("input[name=password]").type("adham123").type("{enter}")
    
    cy.contains('About us').click()
    cy.url().should('include', '/aboutus')
    cy.contains('Connect Team')
  
      })
    })




////aboutus page  test ///////////////////////////////






  // describe('My First Test', () => {
  //   it('Gets, types and asserts', () => {
  //     cy.visit('http://localhost:3000')
  
  //     cy.contains('type').click()
  
  //     // Should be on a new URL which includes '/commands/actions'
  //     cy.url().should('include', '/commands/actions')
  
  //     // Get an input, type into it and verify that the value has been updated
  //     cy.get('.action-email')
  //       .type('fake@email.com')
  //       .should('have.value', 'fake@email.com')
  //   })
  // })