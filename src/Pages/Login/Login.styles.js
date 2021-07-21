import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
h1{
  text-align: center;
  color: #5E6C84;
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 25px;
  }
  a{text-decoration:none;color:#0052cc}
  i{
    vertical-align: -webkit-baseline-middle;
    cursor: pointer;
  }
  input::-ms-reveal,
  input::-ms-clear {
        display: none;
      }
  .text-center{
    text-align: center;
  }
  .login-method-seperator{
    margin:15px 0px;
    }
  #google-icon{
    
  }
  .password-container{
    display: flex;
    justify-content: space-around;
    border: 2px solid #dfe1e6;
    height: 44px;
    border-radius: 3px;
    background-color: #fafbfc;
    transition: background-color 0.2s ease-in-out 0s,
    border-color 0.2s ease-in-out 0s;
  }
  .password-container:focus-within{
    border: 2px solid black;
  }
  .bottom-link-two::before{content:"•";margin: 0px 5px ;color:black}
  `;
const inputStyles = css`
  width: 100%;
  font-size: 14px;
  background-color: #fafbfc;
  border: 2px solid #dfe1e6;
  ${"" /* margin: 0 0 1.2em; */}
  border-radius: 3px;
  height: 44px;
  transition: background-color 0.2s ease-in-out 0s,
    border-color 0.2s ease-in-out 0s;
  padding: 0.5em;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  padding: 40px 0px;
  font-size: xxx-large;
  font-weight: 900;
`;
export const Background = styled.div`
  background-color: #f9fafc;
  min-width: 100vh;
  min-height: 100vh;
`;
export const AccountForm = styled.div`
  /* display: flex; */
`;
export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
  margin: ${(props) => (props.show ? "10px 0" : "0 0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;
export const CenterLayout = styled.div`
  margin: 0 auto;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 25px 40px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;
export const FormFieldEmail = styled.input`
  ${inputStyles}
`;
export const FormFieldPassword = styled.input`
  ${inputStyles}
  border: none;
  width: 90%;
  margin: 0;
  padding: 0;
  :focus {
    outline: none;
  }
`;
export const FormFieldButton = styled.input`
  width: 100%;
  height: 44px;
  font-size: 16px;
  border-radius: 0.3em;
  border: 2px solid #dfe1e6;
  background-color: #5aac44;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;
export const OauthButton = styled.div`
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  font-weight: 500;
  box-shadow: rgba(0 0 0 / 20%) 1px 1px 5px 0;
`;
export const FormBottomLinks = styled.div`
  width: 400px;
  margin: 25px 0;
  border-top: 1px solid hsl(0, 0%, 80%);
  text-align: center;
  padding: 5px 0 0 0;
`;
