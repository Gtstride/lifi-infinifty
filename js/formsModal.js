const modal = document.getElementById("modal");
const formContainer = document.getElementById("formContainer");
const closeBtn = document.getElementById("close-btn");

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function openModal(type) {
  modal.style.display = "flex";
  if (type === "investor") {
    formContainer.innerHTML = `
      <h2>Investor Form</h2>
      <form class="modal-form" id="investor-form">
        <i id="close-btn" class="close-btn fa fa-times-circle-o" onclick="closeModal()"></i>
          <label>Full Name *</label>
        <input type="text" required placeholder="Eg. John Doe"/>
        <label>Business / Company Name *</label>
        <input type="text" required placeholder="Eg. Oraze Limited/John Doe"/>

        <label>Email Address *</label>
        <input type="email" required placeholder="Eg. john@example.com"/>

        <label>Phone Number (optional)</label>
        <input type="tel" placeholder="+2347072086182"/>

        <label for="country">Country / Location *</label>
        <select id="country1" required>
          <option value="">Select your country</option>
        </select>

        <label>LinkedIn Profile (optional)</label>
        <input type="url" placeholder="https://"/>

        <label>Type of Investor</label>
        <div id="investor-options">
          <label class="checkbox-label"><input type="checkbox" name="investor_type" class="investor-checkbox" value="Angel Investor" /> Angel Investor</label><br />
          <label class="checkbox-label"><input type="checkbox" name="investor_type" class="investor-checkbox" value="Venture Capitalist" /> Venture Capitalist</label><br />
          <label class="checkbox-label"><input type="checkbox" name="investor_type" class="investor-checkbox" value="Private Equity" /> Private Equity</label><br />
          <label class="checkbox-label"><input type="checkbox" name="investor_type" class="investor-checkbox" value="Institutional Investor" /> Institutional Investor</label><br />
          <label class="checkbox-label"><input type="checkbox" name="investor_type" class="investor-checkbox" value="Other" /> Other <input type="text" class="other" /></label>
        </div>

        <label>Amount Interested in Investing (£)</label>
        <input type="number" required place="0"/>

        <label>Stage of Business (e.g. Seed, Series A...)</label>
        <input type="text" required />
        <label>Industry Interests</label>
        <input type="text" placeholder="Enter Industry"/>

        <label>How Did You Hear About Us?</label>
        <input type="text" placeholder="LinkedIn, Facebook, Friends etc..."/>

        <label>Additional Comments or Questions</label>
        <textarea rows="8"></textarea>

        <label><input type="checkbox" required /> I acknowledge that this is an expression of interest and not a binding agreement.</label>
        <label><input type="checkbox" required /> I consent to be contacted by Lifi Infinity regarding investment opportunities.</label>

        <button type="submit" class="submit-btn" id="submit-btn">Submit</button>
      </form>`;

    // closeBtn.style.display = "block";

    // ✅ RE-INITIALIZE SCRIPTED ELEMENTS AFTER INSERTING FORM

    // --- COUNTRY DROPDOWN SETUP ---
    const select = document.getElementById("country1");

    function populateCountries1(list) {
      select.innerHTML = '<option value="">Select your country</option>';
      list.forEach((country) => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
      });
    }

    populateCountries1(countries);

    // searchInput.addEventListener("input", function () {
    //   const query = this.value.toLowerCase();
    //   const filtered = countries.filter((country) =>
    //     country.toLowerCase().includes(query)
    //   );
    //   populateCountries(filtered);
    // });

    // --- INVESTOR CHECKBOX VALIDATION ---
    document
      .getElementById("investor-form")
      .addEventListener("submit", function (e) {
        const checkboxes = document.querySelectorAll(".investor-checkbox");
        const isChecked = Array.from(checkboxes).some(
          (checkbox) => checkbox.checked
        );
        if (!isChecked) {
          e.preventDefault();
          alert("Please select at least one type of investor.");
        }
      });
  } else {
    formContainer.innerHTML = `
    <h2>Partnership Form</h2>
    <form class="modal-form">
      <i id="close-btn" class="close-btn fa fa-times-circle-o" onclick="closeModal()"></i>
      <label>Full Name *</label>
      <input type="text" required placeholder="Enter your name"/>

      <label>Organization / Business Name *</label>
      <input type="text" required placeholder="Eg. Oraze Limited/John Doe"/>

      <label>Business Email Address *</label>
      <input type="email" required placeholder="Eg. doe@example.com"/>

      <label>Phone Number(optional)</label>
      <input type="tel" required placeholder="Eg. +2347062086182"/>

      <label>Website / Portfolio Link(optional)</label>
      <input type="url" placeholder="Eg. https://"/>

       <label for="country">Country / Location *</label>
        <select id="country2" required>
          <option value="">Select your country</option>
        </select>

      <label>Type of Partnership *</label>
      <div>
        <label class="checkbox-label"><input type="checkbox" /> Strategic Partnership</label><br />
        <label class="checkbox-label"><input type="checkbox" /> Technology Integration</label><br />
        <label class="checkbox-label"><input type="checkbox" /> Marketing/Promotion</label><br />
        <label class="checkbox-label"><input type="checkbox" /> Affiliate Partnership</label><br />
        <label class="checkbox-label"><input type="checkbox" /> Content Collaboration</label><br />
        <label class="checkbox-label"><input type="checkbox" /> Other <input type="text" class="other"/></label>
      </div>

      <label>Brief Description of Your Business *</label>
      <textarea rows="8" required placeholder="Start typing"></textarea>

      <label>Industry *</label>
      <input type="text" placeholder="Enter your industry" required/>

      <label>Years in Operation (optional)</label>
      <input type="number" placeholder="0"/>

      <label>What Kind of Collaboration Are You Seeking? *</label>
      <textarea rows="3" required placeholder="start typing"></textarea>

      <label>How Do You See This Partnership Being Mutually Beneficial? *</label>
      <textarea rows="8" required placeholder="Start typing..."></textarea>


      <label>Additional Comments(optional)</label>
      <textarea rows="8" placeholder="Start typing..."></textarea>

      <label><input type="checkbox" require/> I confirm that the information provided is accurate.</label>
      <label><input type="checkbox" require/> I consent to being contacted regarding this partnership request.</label>

      <button type="submit" class="submit-btn">Submit</button>
    </form>`;
    // --- COUNTRY DROPDOWN SETUP ---
    const select2 = document.getElementById("country2");

    function populateCountries2(list) {
      select2.innerHTML = '<option value="">Select your country</option>';
      list.forEach((country) => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        select2.appendChild(option);
      });
    }

    populateCountries2(countries);
  }
}

function closeModal() {
  modal.style.display = "none";
  formContainer.innerHTML = "";
}
