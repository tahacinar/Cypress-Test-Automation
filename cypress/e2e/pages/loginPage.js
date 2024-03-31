class loginPage{

    fillUserName(text){
        cy.get("[name='username']").type(text);
        return this;
    }

    fillPassword(text){
        cy.get("[name='password']").type(text);
        return this;
    }

    clearUserName(){
        cy.get("[name='username']").clear();
        return this;
    }

    clearPassword(){
        cy.get("[name='password']").clear();
        return this;
    }

    clickLogin(){
        cy.get("[class='login'] input[type='submit']").click();
        return this;
    }
}

export default loginPage;