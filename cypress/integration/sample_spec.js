describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })


  describe('My secound Test', () => {
    it('Visits the landing page', () => {
      cy.visit('http://localhost:3001')
    })
  })

  describe('My third Test', () => {
    it('finds the content "welcome"', () => {
      cy.visit('http://localhost:3001')
  
      cy.contains('Welcome')
    })
  })
  describe('My third Test', () => {
    it('finds the content "login"', () => {
      cy.visit('http://localhost:3001')
  
      cy.contains('login')
    })
  })
  describe('My third Test', () => {
    it('finds the content "signup"', () => {
      cy.visit('http://localhost:3001')
  
      cy.contains('Sign Up')
    })
  })
 
  describe('My third Test', () => {
    it('click the content "signup"', () => {
      cy.visit('http://localhost:3001')
  
      cy.contains('Sign Up').click()
    })
  })

  describe('My third Test', () => {
    it('click the content "login"', () => {
      cy.visit('http://localhost:3001')
  
      cy.contains('login').click()
    })
})

describe('sign in Test', () => {
    it('clicking "sign in " navigates to sign in page ', () => {
      cy.visit('http://localhost:3001')
  
      cy.contains('login').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/login')
    })
  })
  describe(' Css test landing page ', () => {
        it('Gets, check class in landing page types and asserts', () => {
          cy.visit('http://localhost:3001')
          cy.get('.container-fluid')
        })
  })



//   describe('My First Test', () => {
//     it('Gets, types and asserts', () => {
//       cy.visit('http://localhost:3001')
  
//       cy.contains('type').click()
  
//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
  
//       // Get an input, type into it and verify that the value has been updated
//       cy.get('.action-email')
//         .type('fake@email.com')
//         .should('have.value', 'fake@email.com')
//     })
//   })