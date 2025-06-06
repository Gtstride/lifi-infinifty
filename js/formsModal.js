const modal = document.getElementById("modal");
const formContainer = document.getElementById("formContainer");
const closeBtn = document.getElementById("close-btn");

function openModal(type) {
  modal.style.display = "flex";
  if (type === "investor") {
    formContainer.innerHTML = `
          <h2>Investor Form</h2>
          <form class="modal-form">
            <label>Full Name / Company Name</label>
            <input type="text" required />

            <label>Email Address</label>
            <input type="email" required />

            <label>Phone Number</label>
            <input type="text" required />

            <label>Country / Location</label>
            <input type="text" required />

            <label>LinkedIn Profile (optional)</label>
            <input type="text" />

            <label>Type of Investor</label>
            <div>
              <label class="checkbox-label"><input type="checkbox" /> Angel Investor</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Venture Capitalist</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Private Equity</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Institutional Investor</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Other <input type="text" class="other" /></label>
            </div>

            <label>Amount Interested in Investing ($)</label>
            <input type="number" required />

            <label>Stage of Business (e.g. Seed, Series A...)</label>
            <input type="text" required />

            <label>Industry Interests</label>
            <select>
              <option>Tech</option>
              <option>Health</option>
              <option>EdTech</option>
              <option>Other</option>
            </select>

            <label>Previous Investment Experience</label>
            <textarea rows="8"></textarea>

            <label>Notable Past Investments (optional)</label>
            <input type="text" />

            <label>How Did You Hear About Us?</label>
            <input type="text" />

            <label>Additional Comments or Questions</label>
            <textarea rows="8"></textarea>

            <label><input type="checkbox" /> I acknowledge that this is an expression of interest and not a binding agreement.</label>
            <label><input type="checkbox" /> I consent to be contacted by Lifi Infinity regarding investment opportunities.</label>

            <button type="submit" class="submit-btn">Submit</button>
          </form>`;
    closeBtn.style.display == "block";
  } else {
    formContainer.innerHTML = `
          <h2>Partnership Form</h2>
          <form class="modal-form">
            <label>Full Name</label>
            <input type="text" required />

            <label>Organization / Business Name</label>
            <input type="text" required />

            <label>Business Email Address</label>
            <input type="email" required />

            <label>Phone Number</label>
            <input type="text" required />

            <label>Website / Portfolio Link</label>
            <input type="url" />

            <label>Country / Region</label>
            <input type="text" />

            <label>Type of Partnership</label>
            <div>
              <label class="checkbox-label"><input type="checkbox" /> Strategic Partnership</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Technology Integration</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Marketing/Promotion</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Affiliate Partnership</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Content Collaboration</label><br />
              <label class="checkbox-label"><input type="checkbox" /> Other <input type="text" class="other"/></label>
            </div>

            <label>Brief Description of Your Business</label>
            <textarea rows="8"></textarea>

            <label>Industry</label>
            <input type="text" />

            <label>Years in Operation (optional)</label>
            <input type="number" />

            <label>What Kind of Collaboration Are You Seeking?</label>
            <textarea rows="3"></textarea>

            <label>How Do You See This Partnership Being Mutually Beneficial?</label>
            <textarea rows="8"></textarea>

            <label>Previous Collaborations (optional)</label>
            <input type="text" />

            <label>Additional Comments</label>
            <textarea rows="8"></textarea>

            <label><input type="checkbox" /> I confirm that the information provided is accurate.</label>
            <label><input type="checkbox" /> I consent to being contacted regarding this partnership request.</label>

            <button type="submit" class="submit-btn">Submit</button>
          </form>`;
    closeBtn.style.display == "none";
  }
}

function closeModal() {
  modal.style.display = "none";
  formContainer.innerHTML = "";
}
