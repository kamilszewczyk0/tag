const masonry = new Macy({
  container: ".gallery__images",
  mobileFirst: true,
  columns: 2,
  breakAt: {
    300: 2,
    700: 3,
    1024: 4,
    1200: 5,
  },
  margin: {
    x: 30,
    y: 30,
  },
});
