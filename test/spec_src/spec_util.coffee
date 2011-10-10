LightBulb.specUtil =
  initLB: ->
    LightBulb
      apikey: "229806407076736"
      secret: '57c44d792431b35940a4843da52c8876'
      permissions: 'publish_stream, create_event'

    waitsFor ->
      FB?
    , 'Facebook Loaded', 5000

    runs ->
      data = LightBulb._getFacebookData()
      expect(data).not.toBeNull()
