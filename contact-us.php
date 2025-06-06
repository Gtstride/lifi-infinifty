<?php
include "./includes/header.php";
?>
<title>Lifi Inifinty - Contact Us</title>
<section class="contact-hero-section">
    <div class="left">
        <p id="name">
            LI-FI INFINITY
            <img src="./assets/wireless_charging_icon.svg" alt="" />
        </p>
        <h2>CONTACT US</h2>
        <p id="content">
            Let’s start a conversation. Drop us a message anytime.
        </p>
        <button href="#reach-out" class="left-button">Contact Us</button>
    </div>
    <div class="right"><img src="./assets/heroImage.png" alt="" /></div>
</section>

<section class="contact-section" id="reach-out">
    <h2>Let's Chat, Reach Out to Us</h2>
    <p>
        Your concern is our priority, send us a message and let us review your
        needs
    </p>

    <form class="contact-form">
        <input type="text" placeholder="First name" required />
        <input type="text" placeholder="Last Name" required />
        <input
            type="email"
            placeholder="Email Address"
            class="full-width"
            required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send message</button>
    </form>
</section>

<section class="contact-info">
    <h1>Contact Information</h1>
    <div class="contact-grid">
        <div class="c-card office-card">
            <div class="card-header">
                <i class="fas fa-map-marker-alt"></i>
                <h2>Our office</h2>
            </div>
            <div class="card-content">
                <p>LIFI Infinity</p>
                <p>London, United Kingdom</p>
            </div>
        </div>

        <div class="c-card phone-card">
            <div class="card-header">
                <i class="fas fa-phone"></i>
                <h2>Phone</h2>
            </div>
            <div class="card-content">
                <p>Call: 080xxxxxxxxx</p>
                <p>WhatsApp: 080xxxxxxxxx</p>
                <p>Email: lifinfinitylimited@gmail.com</p>
            </div>
        </div>

        <div class="c-card follow-card">
            <div class="card-header">
                <i class="fas fa-users"></i>
                <h2>Follow Us</h2>
            </div>

            <div class="card-content social-icons">
                <div class="social-item">
                    <img
                        src="./assets/instagram.jpeg"
                        alt="Instagram Logo"
                        class="social-icon" />
                    <span>Instagram</span>
                </div>
                <div class="social-item">
                    <img
                        src="./assets/whatsapp.png"
                        alt="WhatsApp Logo"
                        class="social-icon" />
                    <span>WhatsApp</span>
                </div>
                <div class="social-item">
                    <img
                        src="./assets/twitter.png"
                        alt="X (Twitter) Logo"
                        class="social-icon twitter" />
                    <span>Twitter</span>
                </div>
                <div class="social-item">
                    <img
                        src="./assets/facebook.png"
                        alt="Facebook Logo"
                        class="social-icon" />
                    <span>Facebook</span>
                </div>
            </div>
        </div>
    </div>
</section>

<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60645421536!2d-0.4312441619948037!3d51.52860701284128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1749145474511!5m2!1sen!2sng"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
<?php
include "./includes/footer.php";
?>