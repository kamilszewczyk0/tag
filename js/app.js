const masonry = new Macy({
  container: ".gallery__images",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    350: 2,
    700: 3,
    1024: 4,
  },
  margin: {
    x: 30,
    y: 30,
  },
});
