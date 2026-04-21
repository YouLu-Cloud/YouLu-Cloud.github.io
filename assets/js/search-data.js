// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught at Soochow University Business School.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-中文",
          title: "中文",
          description: "中文简介",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zh/";
          },
        },{id: "news-this-site-is-now-live-i-plan-to-keep-publications-and-cv-up-to-date-here",
          title: 'This site is now live. I plan to keep publications and CV up...',
          description: "",
          section: "News",},];
