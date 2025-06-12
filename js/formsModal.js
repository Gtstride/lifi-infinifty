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
      <form class="modal-form" id="investor-form" method="POST" action="./database/investorsController.php">
      <i id="close-btn" class="close-btn fa fa-times-circle-o" onclick="closeModal()"></i>
    <label>Full Name *</label>
    <input type="text" name="full_name" required placeholder="Eg. John Doe"/>

    <label>Business / Company Name *</label>
    <input type="text" name="company_name" required placeholder="Eg. Oraze Limited/John Doe"/>

    <label>Email Address *</label>
    <input type="email" name="email" required placeholder="Eg. john@example.com"/>

    <label>Phone Number (optional)</label>
    <input type="tel" name="phone" placeholder="+2347072086182"/>

    <label for="country">Country / Location *</label>
    <select id="country1" name="country" required>
      <option value="">Select your country</option>
    </select>

    <label>LinkedIn Profile (optional)</label>
    <input type="url" name="linkedin" placeholder="https://"/>

   <label>Type of Investor</label>
<div id="investor-options">
  <label><input class="investor-checkbox" type="checkbox" name="investor_type[]" value="Angel Investor" /> Angel Investor</label><br />
  <label><input class="investor-checkbox" type="checkbox" name="investor_type[]" value="Venture Capitalist" /> Venture Capitalist</label><br />
  <label><input class="investor-checkbox" type="checkbox" name="investor_type[]" value="Private Equity" /> Private Equity</label><br />
  <label><input class="investor-checkbox" type="checkbox" name="investor_type[]" value="Institutional Investor" /> Institutional Investor</label><br />
  <label>
    <input class="investor-checkbox" type="checkbox" name="investor_type[]" value="Other" id="otherCheckbox" />
    Other <input type="text" name="other_investor_type" id="otherInvestorInput" placeholder="Please specify" class="other" />
  </label>
</div>
    <label>Amount Interested in Investing (£) *</label>
    <input type="number" name="amount" required placeholder="0"/>

    <label>Stage of Business (e.g. Seed, Series A...) *</label>
    <input placeholder="Enter Business stage" type="text" name="business_stage" required />

    <label>Industry Interests(optional)</label>
    <input type="text" name="industry" placeholder="Enter Industry"/>

    <label>How Did You Hear About Us? *</label>
    <input required type="text" name="referral" placeholder="LinkedIn, Facebook, Friends etc..."/>

    <label>Additional Comments or Questions(optional)</label>
    <p>
    <textarea name="comments" class="textarea" placholder="Start typing..."></textarea>
    </p>
    

    <label><input type="checkbox" name="acknowledge" required /> I acknowledge this is an expression of interest and not a binding agreement.</label>
    <label><input type="checkbox" name="consent" required /> I consent to be contacted by Lifi Infinity.</label>

    <button type="submit" class="submit-btn" id="submit-btn">Submit</button>
</form>
`;

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
    const investorCheckboxes = document.querySelectorAll(".investor-checkbox");
    const otherCheckbox = document.getElementById("otherCheckbox");
    const otherInput = document.getElementById("otherInvestorInput");

    investorCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (otherCheckbox.checked) {
          otherInput.disabled = false;
          otherInput.required = true;
        } else {
          otherInput.disabled = true;
          otherInput.required = false;
          otherInput.value = "";
        }
      });
    });
  } else {
    formContainer.innerHTML = `
    <h2>Partnership Form</h2>
    <form class="modal-form" id="partnership-form" action="./database/partnershipController.php" method="POST">
  <i id="close-btn" class="close-btn fa fa-times-circle-o" onclick="closeModal()"></i>

  <label>Full Name *</label>
  <input type="text" name="full_name" required placeholder="Enter your name" />

  <label>Organization / Business Name *</label>
  <input type="text" name="company_name" required placeholder="Eg. Oraze Limited/John Doe" />

  <label>Business Email Address *</label>
  <input type="email" name="email" required placeholder="Eg. doe@example.com" />

  <label>Phone Number (optional)</label>
  <input type="tel" name="phone" placeholder="Eg. +2347062086182" />

  <label>Website / Portfolio Link (optional)</label>
  <input type="url" name="website" placeholder="Eg. https://" />

  <label for="country">Country / Location *</label>
  <select id="country2" name="country" required>
    <option value="">Select your country</option>
  </select>

  <label>Type of Partnership *</label>
  <div>
    <label class="checkbox-label">
      <input class="partnership-checkbox" type="checkbox" name="partnership_type[]" value="Strategic Partnership" />
      Strategic Partnership
    </label><br />

    <label class="checkbox-label">
      <input class="partnership-checkbox" type="checkbox" name="partnership_type[]" value="Technology Integration" />
      Technology Integration
    </label><br />

    <label class="checkbox-label">
      <input class="partnership-checkbox" type="checkbox" name="partnership_type[]" value="Marketing/Promotion" />
      Marketing/Promotion
    </label><br />

    <label class="checkbox-label">
      <input class="partnership-checkbox" type="checkbox" name="partnership_type[]" value="Affiliate Partnership" />
      Affiliate Partnership
    </label><br />

    <label class="checkbox-label">
      <input class="partnership-checkbox" type="checkbox" name="partnership_type[]" value="Content Collaboration" />
      Content Collaboration
    </label><br />

    <label class="checkbox-label">
      <input id="otherCheckbox" class="partnership-checkbox" type="checkbox" name="partnership_type[]" value="Other" />
      Other <input id="otherPartnershipInput"  type="text" name="other_partnership_type" class="other" placeholder="Please specify" />
    </label>
  </div>

  <label>Brief Description of Your Business *</label>
  <p>
    <textarea class="textarea" name="business_description" required placeholder="Start typing"></textarea>
  </p>

  <label>Industry *</label>
  <input type="text" name="industry" placeholder="Enter your industry" required />

  <label>Years in Operation (optional)</label>
  <input type="number" name="years_in_industry" placeholder="0" />

  <label>What Kind of Collaboration Are You Seeking? *</label>
  <p>
    <textarea class="textarea" name="collaboration_type" required placeholder="Start typing"></textarea>
  </p>

  <label>How Do You See This Partnership Being Mutually Beneficial? *</label>
  <p>
    <textarea class="textarea" name="mutual_benefit" required placeholder="Start typing..."></textarea>
  </p>

  <label>Additional Comments (optional)</label>
  <p>
    <textarea class="textarea" name="comments" placeholder="Start typing..."></textarea>
  </p>

  <label><input type="checkbox" required /> I confirm that the information provided is accurate.</label>
  <label><input type="checkbox" required /> I consent to being contacted regarding this partnership request.</label>

  <button type="submit" class="submit-btn">Submit</button>
</form>
`;
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

    // --- INVESTOR CHECKBOX VALIDATION ---
    document
      .getElementById("partnership-form")
      .addEventListener("submit", function (e) {
        const checkboxes2 = document.querySelectorAll(".partnership-checkbox");
        const isChecked2 = Array.from(checkboxes2).some(
          (checkbox) => checkbox.checked
        );
        if (!isChecked2) {
          e.preventDefault();
          alert("Please select at least one type of Partner.");
        }
      });
    const partnershipCheckboxes = document.querySelectorAll(
      ".partnership-checkbox"
    );
    const otherCheckbox2 = document.getElementById("otherCheckbox");
    const otherInput2 = document.getElementById("otherPartnershipInput");

    partnershipCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (otherCheckbox2.checked) {
          otherInput2.disabled = false;
          otherInput2.required = true;
        } else {
          otherInput2.disabled = true;
          otherInput2.required = false;
          otherInput2.value = "";
        }
      });
    });
  }
}

function closeModal() {
  modal.style.display = "none";
  formContainer.innerHTML = "";
}
