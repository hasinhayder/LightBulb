describe 'LightBulb Core', ->
  it 'should avail LightBulb instance in global scope', ->
    expect(LightBulb).toBeDefined()

  it 'should avail LightBulb instance in jquery object', ->
    expect($).toBeDefined()
    expect($.LightBulb).toBeDefined()

describe 'LightBulb initialize', ->
  it 'should initialize facebook api', ->
    LightBulb.specUtil.initLB()

describe 'LightBulb login', ->
  beforeEach ->
    LightBulb.specUtil.initLB()

  it 'should login user', ->
    fbSession = null
    fbData = null

    LightBulb.login()
      .then((session, data) ->
        fbSession = session
        fbData = data
      )

    waitsFor ->
      fbSession? && fbData?
    , 'Session is available', 30000

    runs ->
      LightBulb.log fbData
      expect(fbSession).toBeDefined()
      expect(fbData).toBeDefined()
      expect(LightBulb.isLoggedIn()).toBeDefined()

  it 'should logout user', ->
    # Before logout (since we are logged in)
    expect(LightBulb.isLoggedIn()).toBeDefined();

    data = LightBulb._getFacebookData()
    expect(data).toBeDefined();
    expect(data.accessToken).toBeDefined();
    expect(data.facebookUserId).toBeDefined();

    # Let's logout
    logoutDone = false
    LightBulb.logout()
      .then (response) ->
        LightBulb.log response
        expect(LightBulb.isLoggedIn()).toBeFalsy()

