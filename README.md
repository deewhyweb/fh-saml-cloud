# FeedHenry SSO PoC

This is an example SAML Cloud App, designed to be used in conjunction with our sample SAML Service. The Cloud App here only proxies calls from client to an SAML Service (e.g. fetching a URL to display in the WebView for IdP login).
You must provide set a SAML_SERVICE environment variable with an appropriate SAML Service ID for this to work.

# Group API

# host [/sso/session/login_host]

Get URL for SSO Sign-in

## host [POST] 

'host' endpoint.

+ Request (application/json)
    + Body
            {
              "token": "deviceId"
            }

+ Response 200 (application/json)
    + Body
            {
            }


# session [/sso/session/valid]

Session check endpoint

## session [POST] 

'session world' endpoint.

+ Request (application/json)
    + Body
            {
              "token": "deviceId"
            }

+ Response 200 (application/json)
    + Body
            {
            }
