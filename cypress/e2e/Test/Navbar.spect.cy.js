describe('navbar section tests', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    });

    
    //check for the default state of the navBar
    it('should render the green navbar with sizin input available', ()=>{
        cy.get('.header-sticky').should('be.visible');
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar > .row > div >#sizing_input').should('be.visible');
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar')
        .should('have.css', 'height', '70px')
        .should('have.css', 'background-color','rgb(0, 170, 126)')
        .should('have.css', 'margin-top', '20px')
        .should('have.css', 'margin-right', '0px')
        .should('have.css', 'margin-left', '0px')
        .should('have.css', 'margin-bottom', '20px')
    })

    it("look for the sizing input button in the green navbar",()=>{
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar > .row > div >#sizing_input').contains('SIZING INPUT');
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar > .row > div >#sizing_input')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css','height','70px')
        .should('have.css', 'width', '225px')
        .should('have.css', 'font-weight','600')
        .should('have.css', 'padding-top','27px')
        .should('have.css', 'text-align','center')
        .should('have.css', 'border-color','rgb(0, 170, 126) rgb(0, 170, 126) rgb(255, 255, 255)');
    })

    it('look for the changes in the green navBar when click the sizing results button', ()=>{
        //perform necesary actions to make sure that ui present in the green navbar change
        cy.get('td:nth-child(3) > #flow-rate-normal').click();
        cy.get('td:nth-child(3) > #flow-rate-normal').type('55.0000');
        cy.get('td:nth-child(3) > #line-press-normal').click();
        cy.get('td:nth-child(3) > #line-press-normal').type('55.0000');
        cy.get('td:nth-child(3) > #temp-normal').click();
        cy.get('td:nth-child(3) > #temp-normal').type('55.0000');
        cy.get('td:nth-child(3) > #ambient-normal').click();
        cy.get('td:nth-child(3) > #ambient-normal').type('55').wait(10000);
        cy.get('.btn-green > span > span:nth-child(1)').click();

        //check for the ui changes
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar >.row > .btn-group')
        .find('label').should('have.length',4);
        //look for the properties in sizing input button present in the green navbar. 
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar > .row > div > #sizing_input')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css','height','70px')
        .should('have.css', 'width', '225px')
        .should('have.css', 'font-weight','600')
        .should('have.css', 'padding-top','27px')
        .should('have.css', 'text-align','center')
        .not('.active')
     
        //check fot the properties in sizing results button present in the green navbar.
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar > .row > div > #sizing_results')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css','height','70px')
        .should('have.css', 'width', '225px')
        .should('have.css', 'font-weight','600')
        .should('have.css', 'padding-top','27px')
        .should('have.css', 'text-align','center')
        .should('have.css', 'border-color','rgb(0, 170, 126) rgb(0, 170, 126) rgb(255, 255, 255)');
        
        //look for the properties in show_more_result button present in the green navbar. 
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar > .row > div > #show_more_result')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css','height','70px')
        .should('have.css', 'width', '225px')
        .should('have.css', 'font-weight','600')
        .should('have.css', 'padding-top','27px')
        .should('have.css', 'text-align','center')
        .not('.active')

        //look for the properties in view_graph button present in the green navbar. 
        cy.get('.header-sticky > .container-fluid > .row > .green-nav-bar > .row > div > #view_graph')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css','height','70px')
        .should('have.css', 'width', '225px')
        .should('have.css', 'font-weight','600')
        .should('have.css', 'padding-top','27px')
        .should('have.css', 'text-align','center')
        .not('.active')
    })

  
})