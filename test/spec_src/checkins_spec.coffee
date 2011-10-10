describe 'Valid checkin', ->
    it 'should check in a specific location', ->
        lb = LightBulb.checkins.create('me', 101889586519301, 23.7913, 90.4009, '598586884', 'Testing out LightBulb')
        expect(lb).not.toBeNull()