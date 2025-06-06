<?php
include "./includes/header.php";
?>
<title>Home - Lifi Inifinty</title>

<main>
  <section class="hero-section">
    <div class="container">
      <div class="hero-info">
        <div class='flex'>
          <div>
            LI-FI INFINITY
            <span><img src="./assets/icons/ri_wireless-charging-line.svg" alt="svg"></span>
          </div>

        </div>
        <p class="hero-head">redefining internet connectivity <span>— with light</span></p>
        <p class="hero-description">
          Experience ultra-fast, secure and interference-free wireless communication powered by Li-Fi technology.
        </p>
      </div>
      <a href="./about-us.php" class="explore-btn">Explore Lifi Now</a>
    </div>
  </section>


  <section class="lifi-section">
    <div class="lifi-container">
      <div class="lifi-images">
        <img src="./assets/images/heroimg.png" alt="Team at work" class="image-top" />
        <img src="./assets/images/heroimg.png" alt="Man with laptop" class="image-bottom" />
      </div>

      <div class="lifi-content">
        <h2>Why LiFi Is the Future of Wireless Communication</h2>
        <p>From banks to planes, hospitals to smart cities — experience unmatched speed, security, and scalability.</p>

        <ul>
          <li>
            <span class="icon">⚡</span>
            <strong>Lightning-Fast Internet</strong><br />
            Harness the speed of light for real-time data transmission — 100× faster than traditional WiFi.
          </li>
          <li>
            <span class="icon">🛡️</span>
            <strong>Unmatched Security</strong><br />
            Light-based transmission means no signal leakage. Ideal for secure environments like banks, hospitals, and data centres.
          </li>
          <li>
            <span class="icon">📶</span>
            <strong>Zero Interference</strong><br />
            Functions flawlessly even in radio-saturated environments — perfect for airplanes, medical facilities, and underground systems.
          </li>
          <li>
            <span class="icon">🌍</span>
            <strong>Scalable for Global Use</strong><br />
            Already piloted across the UK, Europe, and Africa — fully adaptable to existing lighting infrastructure.
          </li>
        </ul>

        <div class="cta-section">
          <p class="cta-section-text">Whether you're a business, institution, or tech innovator — we offer tailor-made LiFi solutions for your unique needs.</p>
          <a class="cta-button" onclick="openModal('investor')">Invest in Us</a>
        </div>
      </div>
    </div>
  </section>
  <section class="built-for-section">
    <div class="built-for-header-card">
      <div class="built-for-container">
        <div class="built-for-content">
          <h2>Built for the Connected Future</h2>
          <p>Discover our range of LiFi-powered services designed for speed, security, and scale.</p>
        </div>
        <div class="built-for-viewmore">
          <a class="view-more-btn" href="">View More <img src="./assets/icons/arrowleft.svg" alt=""></a>
        </div>
      </div>
      <div class="card-container">
        <div class="cards">
          <div class="card">

            <img
              src="./assets/icons/tower.svg"
              alt="Internet Infrastructure" />
            <h3>Li Fi internet infrastructure</h3>
            <p>
              We design and deploy scalable LiFi infrastructure that transforms
              existing lighting systems into high-speed, secure data networks. Our
              end-to- end solutions integrate seamlessly with your environment —
              delivering reliable, future-ready connectivity for smart buildings,
              campuses, and enterprise facilities.
            </p>
          </div>

          <div class="card purple">
            <img src="./assets/icons/compass.svg" alt="Consultancy" />
            <h3>Li Fi consultancy</h3>
            <p>
              We offer expert consultancy services to help businesses,
              institutions, and governments integrate LiFi technology into their
              operations. From feasibility studies to deployment strategies, our
              team provides tailored guidance to ensure the successful adoption of
              secure, high-speed light-based communication.
            </p>
          </div>

          <div class="card">
            <img src="./assets/icons/tool-box.svg" alt="Kit System" />
            <h3>Li Fi kits system.</h3>
            <p>
              Our plug-and-play LiFi Kits make it easy to experience the power of
              LiFi. Designed for education, testing, and small-scale
              implementation, each kit includes LiFi-enabled hardware and software
              for seamless setup and immediate results, ideal for schools, R&D
              labs, and innovation hubs.
            </p>
          </div>

          <div class="card purple">
            <img
              src="./assets/icons/fluent_lockclosedkey.svg"
              alt=" CybersecuritySolutions" />
            <h3>Li Fi cybersecurity solutions.</h3>
            <p>
              LiFi Infinity delivers cybersecurity solutions that leverage the
              physical security advantages of light- based communication. By
              eliminating radio wave vulnerabilities, our systems offer an
              ultra-secure wireless environment, perfect for financial
              institutions, defence, and sensitive data centres. help me suggest
              icons for the services
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- <section class="testimonial-section">
  <div class="testimonial-header">
    <h2>What Our Clients Say About Us</h2>
    <div class="carousel-container">
      <div class="carousel">
        <div class="cards-wrapper">
          <div class="carouselcard">
            <div class="card-image-section">
             <img src="./assets/images/heroimg.png" alt="Person in jacket" />
            </div>
            <div class="card-content-section">
              <p class="card-date">May 8, 2020</p>
              <h3 class="card-name">Veronica</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>

          <div class="carouselcard">
            <div class="card-image-section">
              <img src="./assets/images/heroimg.png" alt="Person in jacket" />
            </div>
            <div class="card-content-section">
              <p class="card-date">June 15, 2020</p>
              <h3 class="card-name">John Doe</h3>
              <p class="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </div>

          <div class="carouselcard">
            <div class="card-image-section">
              <img src="./assets/images/heroimg.png" alt="Person in jacket" />
            </div>
            <div class="card-content-section">
              <p class="card-date">July 22, 2020</p>
              <h3 class="card-name">Jane Smith</h3>
              <p class="card-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>

          <div class="carouselcard">
            <div class="card-image-section">
              <img src="./assets/images/heroimg.png" alt="Person in jacket" />
            </div>
            <div class="card-content-section">
              <p class="card-date">August 5, 2020</p>
              <h3 class="card-name">Michael Brown</h3>
              <p class="card-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>
          </div>

          <div class="carouselcard">
            <div class="card-image-section">
              <img src="./assets/images/heroimg.png" alt="Person in jacket" />
            </div>
            <div class="card-content-section">
              <p class="card-date">September 1, 2020</p>
              <h3 class="card-name">Emily White</h3>
              <p class="card-text">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>

          <div class="carouselcard">
            <div class="card-image-section">
              <img src="./assets/images/heroimg.png" alt="Person in jacket" />
            </div>
            <div class="card-content-section">
              <p class="card-date">October 10, 2020</p>
              <h3 class="card-name">David Green</h3>
              <p class="card-text">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-controls">
        <button class="chevron-left">
          <img src="./assets/icons/chevron-left.svg" alt="Previous" />
        </button>
        <div class="dots"></div>
        <button class="chevron-right">
          <img src="./assets/icons/chevron-right.svg" alt="Next" />
        </button>
      </div>
    </div>
  <div>
</section> -->
  <section class="cta">
    <div class="cta-overlay">
      <h2>
        Whether you're a business, institution, or tech innovator — we offer
        tailor-made LiFi solutions for your unique needs.
      </h2>
      <a href="#" class="btn-primary">Partner With Us</a>
    </div>
  </section>
</main>


<script>
  document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".cards-wrapper");
    const carousel = document.querySelector(".carousel");
    const cards = Array.from(wrapper.children);
    const dotsContainer = document.querySelector(".dots");
    const prevBtn = document.querySelector(".chevron-left");
    const nextBtn = document.querySelector(".chevron-right");

    let currentIndex = 0;
    let cardWidth = 0;
    let gap = 0;
    let carouselElementWidth = 0;
    let wrapperScrollWidth = 0;

    function measureElements() {
      if (cards.length > 0) {
        cardWidth = cards[0].offsetWidth;
        gap = parseInt(getComputedStyle(wrapper).gap);
      }
      carouselElementWidth = carousel.offsetWidth;
      wrapperScrollWidth = wrapper.scrollWidth;
    }

    measureElements();
    window.addEventListener("resize", measureElements);

    cards.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "dot";
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll(".dot"));

    function updateCarousel() {
      measureElements();

      let transformX;

      const idealTransformX =
        carouselElementWidth / 2 - (cards[currentIndex].offsetLeft + cardWidth / 2);

      const minPossibleTransformX = carouselElementWidth - wrapperScrollWidth;
      const maxPossibleTransformX = 0;

      if (wrapperScrollWidth <= carouselElementWidth) {
        transformX = (carouselElementWidth - wrapperScrollWidth) / 2;
      } else {
        if (currentIndex === 0) {
          transformX = 0;
        } else if (currentIndex === cards.length - 1) {
          transformX = minPossibleTransformX;
        } else {
          transformX = Math.min(
            Math.max(idealTransformX, minPossibleTransformX),
            maxPossibleTransformX
          );
        }
      }

      wrapper.style.transform = `translateX(${transformX}px)`;

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        currentIndex = parseInt(dot.dataset.index);
        updateCarousel();
      });
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    updateCarousel();
  });
</script>
<?php
include "./includes/footer.php";
?>