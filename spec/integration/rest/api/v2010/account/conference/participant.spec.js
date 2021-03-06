'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Participant', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conferenceSid: 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        callSid: 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants/<%= callSid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conference_sid': 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'date_updated': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'end_conference_on_exit': false,
          'muted': false,
          'hold': false,
          'status': 'complete',
          'start_conference_on_enter': true,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conferenceSid: 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        callSid: 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants/<%= callSid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conference_sid': 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'date_updated': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'end_conference_on_exit': false,
          'muted': false,
          'hold': false,
          'status': 'complete',
          'start_conference_on_enter': true,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        from: '+987654321',
        to: '+123456789'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conferenceSid: 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants.json')(solution);

      var values = {
        From: '+987654321',
        To: '+123456789',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create_with_sid response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conference_sid': 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'date_updated': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'end_conference_on_exit': false,
          'muted': false,
          'hold': false,
          'status': 'complete',
          'start_conference_on_enter': true,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        from: '+987654321',
        to: '+123456789'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create_with_friendly_name response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conference_sid': 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'date_updated': 'Fri, 18 Feb 2011 21:07:19 +0000',
          'end_conference_on_exit': false,
          'muted': false,
          'hold': false,
          'status': 'complete',
          'start_conference_on_enter': true,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        from: '+987654321',
        to: '+123456789'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conferenceSid: 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        callSid: 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants/<%= callSid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants('CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conferenceSid: 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'participants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conference_sid': 'CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Fri, 18 Feb 2011 21:07:19 +0000',
                  'date_updated': 'Fri, 18 Feb 2011 21:07:19 +0000',
                  'end_conference_on_exit': false,
                  'muted': false,
                  'hold': false,
                  'status': 'complete',
                  'start_conference_on_enter': true,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'previous_page_uri': null,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'participants': [],
          'previous_page_uri': null,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conferences/CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .conferences('CFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .participants.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

