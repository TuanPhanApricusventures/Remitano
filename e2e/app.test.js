describe('Movie Booking App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the movie list on the home screen', async () => {
    await expect(element(by.id('homeScreen'))).toBeVisible();
    await expect(element(by.id('movieList'))).toBeVisible();
    await expect(element(by.id('movieItem0'))).toBeVisible();
  });

  it('should navigate to booking screen when a movie is tapped', async () => {
    await element(by.id('movieItem0')).tap();
    await expect(element(by.id('bookingScreen'))).toBeVisible();
    await expect(element(by.id('movieTitle'))).toBeVisible();
    await expect(element(by.id('bookingButton'))).toBeVisible();
  });

  it('should add a movie to favorites and display it in the favorites tab', async () => {
    await element(by.id('favoriteButton0')).tap();
    await element(by.text('Favorites')).tap();
    await expect(element(by.id('favoritesTab'))).toBeVisible();
    await expect(element(by.id('movieItem0'))).toBeVisible();
  });

  it('should book a movie and display it in the bookings tab', async () => {
    await element(by.id('movieItem0')).tap();
    await element(by.id('bookingButton')).tap();
    await element(by.text('Bookings')).tap();
    await expect(element(by.id('bookingsTab'))).toBeVisible();
    await expect(element(by.id('movieItem0'))).toBeVisible();
  });

  it('should change booking button to "Watched" after booking a movie', async () => {
    await element(by.id('movieItem0')).tap();
    await element(by.id('bookingButton')).tap();
    await element(by.text('Home')).tap();
    await expect(element(by.id('homeScreen'))).toBeVisible();
    await expect(element(by.text('Watched'))).toBeVisible();
  });
});