<template>
  <nav>
    <div class="left_nav">
      <img src="./assets/images/Logo.svg" alt="" />
      <div class="links_cont">
        <a href="">Demos</a>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Contact</a>
      </div>
    </div>
    <div class="right_nav">
      <button class="sec_button">Login</button>
      <button>Sign Up</button>
    </div>
  </nav>
  <!-- Hero -->
  <section class="hero">
    <div class="hero_cont">
      <div>
        <h1>Create your next mobile app landing page in minutes.</h1>
        <p>
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          integer at odio velna vitae auctor integer congue magna at pretium
          purus pretium ligula rutrum luctus risus
        </p>
        <div class="trial_cont">
          <p>Enter your email address</p>
          <button class="trial_button">Start 14 Days Trial</button>
        </div>
      </div>
      <img
        src="./assets/images/Appmock.svg"
        alt=""
        srcset=""
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      />
    </div>
  </section>

  <!-- Partners -->
  <section class="partners">
    <div>
      <img
        src="./assets/images/1.svg"
        alt=""
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
      <img
        src="./assets/images/2.svg"
        alt=""
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      />
      <img
        src="./assets/images/3.svg"
        alt=""
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      />
      <img
        src="./assets/images/4.svg"
        alt=""
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="700"
      />
    </div>
  </section>

  <!-- Features -->
  <section class="features">
    <div class="headline">
      <h1>A simple, proven way to boost your team performance.</h1>
      <p>
        Fully layered dolor sit amet, consectetur Facere, nobis, id expedita
        dolores officiis laboriosam.
      </p>
    </div>
    <div class="features_cont">
      <div class="features_card" data-aos="zoom-in" data-aos-duration="1000">
        <img src="./assets/images/send.svg" alt="" />
        <div>
          <h2>Innovative Soluation</h2>
          <p>
            Fully layered dolor sit amet, consectetur adipisicing elit. Facere,
            nobis, id expedita dolores officiis laboriosam.
          </p>
        </div>
      </div>
      <div
        class="features_card"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img src="./assets/images/phone.svg" alt="" />
        <div>
          <h2>Clear Navigation</h2>
          <p>
            Fully layered dolor sit amet, consectetur adipisicing elit. Facere,
            nobis, id expedita dolores officiis laboriosam.
          </p>
        </div>
      </div>
      <div
        class="features_card"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <img src="./assets/images/people.svg" alt="" />
        <div>
          <h2>Over 800 Clients</h2>
          <p>
            Fully layered dolor sit amet, consectetur adipisicing elit. Facere,
            nobis, id expedita dolores officiis laboriosam.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Download App -->
  <section class="download_cont">
    <div>
      <img src="./assets/images/app1.png" alt="" />
      <div class="download_text">
        <h2>We develop digital strategies products and services.</h2>
        <p>
          Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict altera
          legimu. Me vita de lege ndos expet end is ad.mita aliu mi ando, haeo
          tibi que com titure viset cut.Proin tempus elit a laoreet volut pat.
        </p>
        <img src="./assets/images/Buttons.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Fira Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
}
nav {
  background: none;
  display: flex;
  position: absolute;
  width: 80%;
  justify-content: space-between;
  margin-left: 10%;
  padding-top: 20px;
}
.left_nav {
  display: flex;
  align-items: center;
  width: 44%;
  justify-content: space-between;
}
.links_cont {
  color: white;
}
.links_cont a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 30px;
}
.right_nav {
  display: flex;
}
.right_nav button {
  background: #fd4c5c;
  border-radius: 3px;
  border: 0px;
  color: white;
  padding: 11px 32px;
  font-size: 16px;
  cursor: pointer;
}
.sec_button {
  background: inherit !important;
  margin-right: 10px;
}

button:hover {
  background: #d43e4b;
  transition: 0.3s;
}
.hero {
  background-image: url("~@/assets/images/bg.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
.hero_cont {
  width: 80%;
  margin: auto;
  padding: 200px 0;

  display: flex;
  /* justify-content: space-between; */
}
.hero_cont div {
  width: 60%;
}
.hero_cont div h1 {
  width: 80%;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 79px;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin: 0;
}
.hero_cont div p {
  width: 70%;
  padding-top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  opacity: 0.8;
}
.trial_cont {
  width: 60% !important;
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}
.trial_cont p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  width: auto !important;
  padding-left: 20px !important;
  padding-top: 0px !important;

  line-height: 26px;
  color: #000b33 !important;
  opacity: 0.6 !important;
}
.trial_button {
  background: #fd4c5c;
  border-radius: 3px;
  border: 0px;
  color: white;
  padding: 0px 30px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 6px;
}
.hero_cont img {
  width: 40%;
  height: auto;
  padding-right: 70px;
  margin-top: -120px !important;
}

.partners {
  background: #ffffff;
}
.partners div {
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.features {
  height: 779px;
  width: 100%;
}
.headline {
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.headline h1 {
  width: 45%;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #000b33;
  margin: 0%;
}

.headline p {
  width: 30%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #000b33;
  opacity: 0.7;
}
.features_cont {
  padding-top: 150px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: auto;
}
.features_card {
  width: 20%;
}
.features_cont div div {
  margin-top: 40px;
}
.features_cont div div h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: #000b33;
}

.features_cont div div p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  color: #000b33;

  opacity: 0.7;
}

.download_cont {
  background-image: url("~@/assets/images/download_bg.png");
  background-size: cover;
  height: 690px;
}
.download_cont div {
  display: flex;
}
.download_cont div img {
  margin-top: -50px;
}
.download_text {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.download_text h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin: 0;
}
.download_text p {
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  opacity: 0.8;
}

/* Media Queries */

@media only screen and (max-width: 1700px) {
  .hero_cont div {
    width: 65%;
  }
  .hero_cont div h1 {
    width: 90% !important;
    font-size: 68px;
    line-height: 72px;
  }
  .left_nav {
    width: 50%;
  }
}
@media only screen and (max-width: 1440px) {
  .left_nav {
    width: 60%;
  }
  .hero_cont div {
    width: 80%;
  }
  .hero_cont div h1 {
    width: 100% !important;
    font-size: 60px;
    line-height: 72px;
  }
  .hero_cont div p {
    width: 90%;
  }
  .trial_cont {
    width: 70% !important;
  }
}
@media only screen and (max-width: 1200px) {
  .hero_cont {
    padding-top: 100px;
  }
  .hero_cont div {
    width: 65%;
  }
  .hero_cont div h1 {
    width: 90% !important;
    font-size: 48px;
    line-height: 54px;
  }
  .trial_cont {
    width: 80% !important;
  }
  .hero_cont img {
    margin-top: -20px !important;
    padding-right: 20px;
  }
  .left_nav {
    width: 66%;
  }
}
</style>
