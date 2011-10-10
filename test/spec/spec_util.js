(function() {
  LightBulb.specUtil = {
    initLB: function() {
      LightBulb({
        apikey: "229806407076736",
        secret: '57c44d792431b35940a4843da52c8876',
        permissions: 'publish_stream, create_event'
      });
      waitsFor(function() {
        return typeof FB !== "undefined" && FB !== null;
      }, 'Facebook Loaded', 5000);
      return runs(function() {
        var data;
        data = LightBulb._getFacebookData();
        return expect(data).not.toBeNull();
      });
    }
  };
}).call(this);
