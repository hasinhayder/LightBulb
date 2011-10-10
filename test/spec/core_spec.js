(function() {
  describe('LightBulb Core', function() {
    it('should avail LightBulb instance in global scope', function() {
      return expect(LightBulb).toBeDefined();
    });
    return it('should avail LightBulb instance in jquery object', function() {
      expect($).toBeDefined();
      return expect($.LightBulb).toBeDefined();
    });
  });
  describe('LightBulb initialize', function() {
    return it('should initialize facebook api', function() {
      return LightBulb.specUtil.initLB();
    });
  });
  describe('LightBulb login', function() {
    beforeEach(function() {
      return LightBulb.specUtil.initLB();
    });
    it('should login user', function() {
      var fbData, fbSession;
      fbSession = null;
      fbData = null;
      LightBulb.login().then(function(session, data) {
        fbSession = session;
        return fbData = data;
      });
      waitsFor(function() {
        return (fbSession != null) && (fbData != null);
      }, 'Session is available', 30000);
      return runs(function() {
        LightBulb.log(fbData);
        expect(fbSession).toBeDefined();
        expect(fbData).toBeDefined();
        return expect(LightBulb.isLoggedIn()).toBeDefined();
      });
    });
    return it('should logout user', function() {
      var data, logoutDone;
      expect(LightBulb.isLoggedIn()).toBeDefined();
      data = LightBulb._getFacebookData();
      expect(data).toBeDefined();
      expect(data.accessToken).toBeDefined();
      expect(data.facebookUserId).toBeDefined();
      logoutDone = false;
      return LightBulb.logout().then(function(response) {
        LightBulb.log(response);
        return expect(LightBulb.isLoggedIn()).toBeFalsy();
      });
    });
  });
}).call(this);
