(function() {
  describe('Valid checkin', function() {
    return it('should check in a specific location', function() {
      var lb;
      lb = LightBulb.checkins.create('me', 101889586519301, 23.7913, 90.4009, '598586884', 'Testing out LightBulb');
      return expect(lb).not.toBeNull();
    });
  });
}).call(this);
