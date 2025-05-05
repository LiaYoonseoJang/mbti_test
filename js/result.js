window.onload = async function () {
    const userAnswers = JSON.parse(localStorage.getItem("mininiAnswers")) || [];
    const code = userAnswers.map(i => "ABCD"[i]).join("");

        console.log("User answer code:", code);
        const matched = resultMap[code];

  if (!matched) {
    document.getElementById("result-display").innerHTML = `
      <h2>Unknown Minini</h2>
      <p>Try the quiz again!</p>
    `;
    return;
  }

  try {

    const mininiName = matched.name.toLowerCase();
    const result = mininiInfo[mininiName.toLowerCase()];

    document.getElementById("result-display").innerHTML = `
      <h1 class="result-name">${mininiName.toUpperCase()}</h1>
      <img src="${result.img}" alt="${mininiName}" class="minini-img result-img" />
      <div class="result-traits">
        <div class="trait"><span class="checkmark">✔</span> ${result.traits[0]}</div>
        <div class="trait"><span class="checkmark">✔</span> ${result.traits[1]}</div>
        <div class="trait"><span class="checkmark">✔</span> ${result.traits[2]}</div>
      </div>
      <div class="description-box">
        ${result.description}
      </div>
      <div class="result-info">
        <h3>${mininiName.toLowerCase()} loves</h3>
        <p>${result.hobby}</p>
        <h3>minini Bestie</h3>
        <p>${result.bestie}</p>
        <h3>${mininiName.toLowerCase()} hates</h3>
        <p>${result.hates}</p>
      </div>
      <div class="result-images">
        <img src="${result.chart}" alt="${mininiName} Chart" class="full-img" />
        <img src="${result.web}" alt="Minini Friendship Web" class="full-img" />
      </div>
<div class="recommend-box">
  <h3>추천 제품 리스트</h3>
  <div class="recommend-grid">
    ${[1,2,3,4,5,6].map(n => {
      const img = result[`recommend${n}`];
      const desc = result[`recommend${n}Desc`];
      return img ? `
        <div class="recommend-item">
          <img src="${img}" alt="product ${n}" />
          <p class="recommend-desc">${desc || ""}</p>
        </div>
      ` : "";
    }).join("")}
  </div>
</div>


      <a href="test.html" class="see-btn">Try Again</a>
    `;
  } catch (err) {
    console.error("Failed to fetch mininiInfo:", err);
    document.getElementById("result-display").innerHTML = `
      <h2>Error</h2>
      <p>We couldn't load your result. Please try again later.</p>
    `;
  }
};