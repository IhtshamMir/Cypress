import {loginPage} from "../login_folder/login_page.cy"
const login=new loginPage();
it('Login test', () =>{
    login.naviagate('https://trytestingthis.netlify.app/');
    login.enterUserName('test');
    login.enterUserPassword('test');
    login.clickSubmit();   
})