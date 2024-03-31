/// <reference types="cypress" />

import baseLib from "../base/baseLib";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import mainPage from "../pages/mainPage";

describe('User Tests', () => {

   const login_page = new loginPage();
   const main_page = new mainPage();
   const home_page = new homePage();
   const base_lib = new baseLib();

   var url = "https://parabank.parasoft.com";
   var errorMessage1 = "An internal error has occurred and has been logged.";
   var errorMessage2 = "Please enter a username and password.";

   it('Başarısız Kullanıcı Girişi Kontrolü', () => {

      main_page
         .goToUrl(url);

      login_page
         .fillUserName("Merhaba2")
         .fillPassword("123")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage1);
   })

   it('Başarılı Kullanıcı Girişi Kontrolü', () => {

      main_page
         .goToUrl(url);

      login_page
         .fillUserName("testcan123")
         .fillPassword("testcan123")
         .clickLogin();

      home_page
         .titleControl("Accounts Overview");
   })

   it('Username Alanı Maksimum Karakter Kontrolü', () => {

      main_page
         .goToUrl(url);

      login_page
         .fillUserName(base_lib.getRandomText(500))
         .fillPassword("123")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage1);
   })

   it('Password Alanı Maksimum Karakter Kontrolü', () => {

      main_page
         .goToUrl(url);

      login_page
         .fillUserName("123")
         .fillPassword(base_lib.getRandomText(500))
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage1);
   })

   it('Username Alanı Minimum Karakter Kontrolü', () => {

      main_page
         .goToUrl(url);

      login_page
         .fillUserName("1")
         .fillPassword("1123123")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage1);
   })

   it('Password Alanı Minimum Karakter Kontrolü', () => {

      main_page
         .goToUrl(url);

      login_page
         .fillUserName("13212312")
         .fillPassword("1")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage1);
   })

   it('Password ve Username Alanları Zorunluluk Kontrolü', () => {
      main_page
         .goToUrl(url);

      login_page
         .clearUserName()
         .clearPassword()
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage2);
   })

   it('Password Alanları Zorunluluk Kontrolü', () => {
      main_page
         .goToUrl(url);

      login_page
         .fillUserName("test")
         .clearPassword()
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage2);
   })

   it('Username Alanları Zorunluluk Kontrolü', () => {

      main_page
         .goToUrl(url);

      login_page
         .clearUserName()
         .fillPassword("test")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage2);
   })

   it('Başarısız Kullanıcı Girişi Kontrolü Username', () => {

      main_page
         .goToUrl(url);

      login_page
         .fillUserName("testcan123")
         .fillPassword("test")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage1);
   })

   it('Başarısız Kullanıcı Girişi Kontrolü Password', () => {

      main_page
         .goToUrl(url);

      login_page
      .fillUserName("test")
      .fillPassword("testcan123")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage1);

   })

})
