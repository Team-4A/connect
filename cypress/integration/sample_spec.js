

//////// landing page test ///////////////////////////////


  // describe('My secound Test', () => {
  //   it('Visits the landing page', () => {
  //     cy.visit('http://localhost:3000')
  //   })
  // })

  // describe('My third Test', () => {
  //   it('finds the content "welcome"', () => {
  //     cy.visit('http://localhost:3000')
  
  //     cy.contains('Welcome')
  //   })
  // })
  // describe('My third Test', () => {
  //   it('finds the content "login"', () => {
  //     cy.visit('http://localhost:3000')
  
  //     cy.contains('login')
  //   })
  // })
  // describe('My third Test', () => {
  //   it('finds the content "signup"', () => {
  //     cy.visit('http://localhost:3000')
  
  //     cy.contains('Sign Up')
  //   })
  // })
 
//   describe('My third Test', () => {
//     it('click the content "signup"', () => {
//       cy.visit('http://localhost:3000')
  
//       cy.contains('Sign Up').click()
//     })
//   })

//   describe('My third Test', () => {
//     it('click the content "login"', () => {
//       cy.visit('http://localhost:3000')
  
//       cy.contains('login').click()
//     })
// })


// describe(' Css test landing page ', () => {
//   it('Gets, check class in landing page types and asserts', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('.container-fluid')
//   })
// })
//////// landing page test ///////////////////////////////



////////sign in page  test ///////////////////////////////

// describe('sign in Test', () => {
//     it('clicking "sign in " navigates to sign in page ', () => {
//       cy.visit('http://localhost:3000')
  
//       cy.contains('login').click()
  
//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/login')
//     })
//   })



//   describe('test login welcome',()=>{
//     it ('check if welcome apperas on login page',()=>{
//       cy.visit('http://localhost:3000')
//       cy.contains('login').click()
//       cy.contains('Welcome')

//     })

//   })
//   describe('test login button',()=>{
//     it ('check if login page has login button',()=>{
//       cy.visit('http://localhost:3000')
//       cy.contains('login').click()
//       cy.contains('Login').click()

//     })

//   })

// describe(' Css test login page ', () => {
//   it('Gets, check class in login page types and asserts', () => {
//     cy.visit('http://localhost:3000/login')

//     cy.get('.h-screen')
//   })
// })



////////sign in page  test ///////////////////////////////




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