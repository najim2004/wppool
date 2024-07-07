// -----------------------Navbar --------------------

const menuBtn = document.getElementById("toggleBtn");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  const menuElement = document.getElementById("menu");
  menuElement.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  const menuElement = document.getElementById("menu");
  menuElement.classList.add("hidden");
});

const navBar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const shareBtn = document.getElementById("shareBtn");
const img = document.querySelector("#shareBtn img");
const menuImg = document.querySelector("#toggleBtn img");
const reportBtn = document.getElementById("reportBtn");

const handleScroll = () => {
  if (window.scrollY > 200) {
    navBar.classList.add("bg-[#F3F3F3]", "lg:mt-[12px]");
    logo.src = "./assets/logo-light.svg";
    shareBtn.classList.add("border-[#AFCD80]");
    img.src = "./assets/shareicon.svg";
    reportBtn.classList.add("border-[#115CD9]", "!text-[#191618]");
    menuImg.src = "./assets/menuDark.svg";
  } else {
    navBar.classList.remove("bg-[#F3F3F3]", "lg:mt-[12px]");
    logo.src = "./assets/logo.svg";
    shareBtn.classList.remove("border-[#AFCD80]");
    img.src = "./assets/share-light.svg";
    reportBtn.classList.remove("border-[#115CD9]", "!text-[#191618]");
    menuImg.src = "./assets/menutoggle.svg";
  }
};
window.addEventListener("scroll", handleScroll);

// -----------------------Navbar --------------------

// -------------------slider ------------------

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

const moveSlider = () => {
  const slideWidth = slider.children[0].offsetWidth + 20;
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
};

nextBtn.addEventListener("click", () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  moveSlider();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slider.children.length - 1;
  }
  moveSlider();
});

// -------------------slider ------------------

// multi-line-chart.js

// Data for the chart
document.addEventListener("DOMContentLoaded", () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WPPOOL",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        data: [20, 45, 35, 50, 75, 90, 100],
      },
      {
        label: "Google",
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        data: [30, 55, 70, 85, 105, 115, 120],
      },
      {
        label: "Microsoft",
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        data: [25, 35, 45, 60, 75, 80, 95],
      },
      {
        label: "Twitter",
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        data: [15, 30, 40, 55, 65, 70, 85],
      },
    ],
  };

  // Configuration options for the chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "%";
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage",
        },
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  };

  // Get the context of the canvas element
  const ctx = document.getElementById("multiLineChart").getContext("2d");

  // Create the chart
  const multiLineChart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: chartOptions,
  });
});
