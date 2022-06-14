const customerName = "Alliance";

const addCustomerName = () => {
  const customerH1 = document.querySelector("h1");
  customerH1.textContent = customerName;

  const introHeader = document.querySelector("#introheader");
  introHeader.textContent = customerName;
};

const changeClassNames = () => {
  const changeClassNodes = document.querySelectorAll(".tm-white-rect");
  changeClassNodes.forEach((changeClassNode) => {
    changeClassNode.className = changeClassNode.className.replace(
      "tm-white-rect",
      "tm-blue-rect"
    );
  });
};

const hideSocialLinks = () => {
  const hideIdNode = document.getElementById("social-links");
  hideIdNode.style.visibility = "hidden";
};

const addAboutText = () => {
  const introPara1 = document.getElementById("intropara1");
  introPara1.textContent = "Alliance was founded in 1931 by Albert Daniels.";

  const introPara2 = document.querySelector("#intropara2");
  introPara2.textContent = "The company is a leader in P.C. Manufacturing";

  const aboutPara1 = document.querySelector("#aboutpara1");
  aboutPara1.textContent = "We deliver the best service this side of creation";

  const aboutPara2 = document.querySelector("#aboutpara2");
  aboutPara2.textContent = "Our motto is satisfaction guaranteed";

  const addressPara = document.querySelector("#addresspara");
  addressPara.textContent = "1-800-565-5656";
};
