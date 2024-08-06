import { logo, off } from '../../resources/assets/image';

export const Login = (): string =>  {
    return `
      <div class="login">
        <div class="wrapper">
          <figure class= "wrapper__top">
          <img src="${logo}" alt="">
          <figcaption>
            <span class="wrapper__top-primary">
              Welcome Back !
            </span>
            <br>
            <span class="wrapper__top-secondary">
              Sign in to continue to yourDigital Library
            </span>
          </figcaption>
          </figure>
          <form class="wrapper__form formlogin">
          <div class="wrapper__form__box">
          <label for="email">Email</label>
          <input
              type="email"
              placeholder="Your email"
              class="wrapper__form__box-input"
              id="email"
          />
          <p class="error"></p>
          </div>
          <div class="wrapper__form__box">
              <label for="password">Password</label>
              <div class = "passwordfield">
              <input
              type="password"
              placeholder="Your password"
              class="wrapper__form__box-input passw"
              id="password"
              />
              <p class="error"></p>
              <figure class="eye">
              <img src="${off}">
              </figure>
              </div>
          </div>
          <div class="wrapper__form__question">
            <div class = "wrapper__form__question__box">
            <input type="checkbox" name="checked" id="checked">
            <label for="remember">Remember me</label>
            </div>
            <a class="wrapper__form__question-pass" href="#">Forgot password?</a>
          </div>
          <button class="wrapper__form-log buttonLogin" >Login</button>
          </form>
          <div class="wrapper__form__bottom">
            <span class="wrapper__form__bottom--text">
                New User?
                <a class="wrapper__form__bottom--text-link"  id= "reg" href="/register">Register Here</a>
            </span>
            <span class="wrapper__form__bottom--text">
                Use as Guest 
            </span>
          </div>
        </div>
      </div>
  `;
}
